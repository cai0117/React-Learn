/**reconcile其实就是虚拟DOM树的diff操作，
 * https://juejin.cn/post/7020239613000155150
 * 需要删除不需要的节点，更新修改过的节点，
 * 添加新的节点。为了在中断后能回到工作位置，
 * 我们还需要一个变量currentRoot，然后在fiber节点里面添加一个属性alternate，
 * 这个属性指向上一次运行的根节点，也就是currentRoot。currentRoot会在第一次render后的commit阶段赋值，
 * 也就是每次计算完后都会把当次状态记录在alternate上，后面更新了就可以把alternate拿出来跟新的状态做diff。
 * 然后performUnitOfWork里面需要添加调和子元素的代码，可以新增一个函数reconcileChildren
 */


/**
 * 如果新老节点类型一样，复用老节点DOM，更新props
如果类型不一样，而且新的节点存在，创建新节点替换老节点
如果类型不一样，没有新节点，有老节点，删除老节点
 */
//删除老节点其实就是加上一个删除标记
//同时用一个全局变量deletions记录所有需要删除的节点
/** @jsxRuntime classic */
export default () => {
  function createElement(type, props, ...children) {
    return {
      type,
      props: {
        ...props,
        children: children.map((child) =>
          typeof child === "object" ? child : createTextElement(child)
        ),
      },
    };
  }
  function createTextElement(text) {
    return {
      type: "TEXT_ELEMENT",
      props: {
        nodeValue: text,
        children: [],
      },
    };
  }

  function createDom(fiber) {
    const dom =
      fiber.type == "TEXT_ELEMENT"
        ? document.createTextNode("")
        : document.createElement(fiber.type);

    updateDom(dom, {}, fiber.props);

    return dom;
  }
//只处理以on开头
  const isEvent = (key) => key.startsWith("on");
  const isProperty = (key) => key !== "children" && !isEvent(key);
  const isNew = (prev, next) => (key) => prev[key] !== next[key];
  const isGone = (next) => (key) => !(key in next);

  //updateDom的代码写的比较简单，事件只处理了简单的on开头的，兼容性也有问题，prevProps和nextProps可能会遍历到相同的属性，有重复赋值，但是总体原理还是没错的
  function updateDom(dom, prevProps, nextProps) {

    // 1. 过滤children属性
  // 2. 老的存在，新的没了，取消
  // 3. 新的存在，老的没有，新增
    // 移除旧事件
    Object.keys(prevProps)
      .filter(isEvent)
      .filter((key) => !(key in nextProps) || isNew(prevProps, nextProps)(key))
      .forEach((name) => {
        const eventType = name.toLowerCase().substring(2);
        dom.removeEventListener(eventType, prevProps[name]);
      });

    // 删除旧属性
    Object.keys(prevProps)
      .filter(isProperty)
      .filter(isGone(nextProps))
      .forEach((name) => {
        dom[name] = "";
      });

    // 设置新属性
    Object.keys(nextProps)
      .filter(isProperty)
      .filter(isNew(prevProps, nextProps))
      .forEach((name) => {
        dom[name] = nextProps[name];
      });

    // 添加新事件
    Object.keys(nextProps)
      .filter(isEvent)
      .filter(isNew(prevProps, nextProps))
      .forEach((name) => {
        const eventType = name.toLowerCase().substring(2);
        dom.addEventListener(eventType, nextProps[name]);
      });
  }

  function commitRoot() {
    // 优先进行删除操作
    deletions.forEach(commitWork);
    // 从根节点的child开始
    commitWork(wipRoot.child);
    // 保存刚构建的fiber树
    currentRoot = wipRoot;
    // 完成后置空进行中根节点
    wipRoot = null;
  }


  //然后就是在commit阶段处理真正的DOM操作，具体的操作是根据我们的effectTag来判断的
  function commitWork(fiber) {
    // child和sibling可能为undefined
    if (!fiber) {
      return;
    }

    const domParent = fiber.parent.dom;

    if (fiber.effectTag === "PLACEMENT" && fiber.dom != null) {
      domParent.appendChild(fiber.dom);
    }

    if (fiber.effectTag === "UPDATE" && fiber.dom != null) {
      updateDom(fiber.dom, fiber.alternate.props, fiber.props);
    }

    if (fiber.effectTag === "DELETION") {
      domParent.removeChild(fiber.dom);
      return;
    }

    commitWork(fiber.child);
    commitWork(fiber.sibling);
  }

  function render(element, container) {
    wipRoot = {
      dom: container,
      props: {
        children: [element],
      },
      // 链接旧的fiber树
      alternate: currentRoot,
    };
    // 需要删除的节点
    deletions = [];
    nextUnitOfWork = wipRoot;
  }

  let nextUnitOfWork = null;
  let currentRoot = null;
  let wipRoot = null;
  let deletions = null;

  function workLoop(deadline) {
    let shouldYield = false;
    while (nextUnitOfWork && !shouldYield) {
      // 执行单元任务
      nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
      // 通过剩余时间判断是否需要立刻交还执行权
      shouldYield = deadline.timeRemaining() < 1;
    }

    if (!nextUnitOfWork && wipRoot) {
      commitRoot();
    }

    // 执行权交还给浏览器
    requestIdleCallback(workLoop);
  }

  requestIdleCallback(workLoop);

  function performUnitOfWork(fiber) {
    // 添加节点元素到dom
    // 如果没有dom属性，根据fiber新构建
    if (!fiber.dom) {
      fiber.dom = createDom(fiber);
    }

    // 遍历节点的children属性创建Fiber对象
    const elements = fiber.props.children;
    // 调和fiber对象，设置状态：添加、更新和删除
    reconcileChildren(fiber, elements);

    // 设置一个Fiber对象作为下一个单元任务
    // 优先使用父fiber的child
    if (fiber.child) {
      return fiber.child;
    }
    let nextFiber = fiber;
    while (nextFiber) {
      // 其次使用父fiber的sibling
      if (nextFiber.sibling) {
        return nextFiber.sibling;
      }
      // 如果没有回退到父节点的parent
      nextFiber = nextFiber.parent;
    }
  }

  /**
   * 调和变更，生成最新的fiber树
   * @param wipFiber 进行中的fiber节点对象
   * @param elements 传入的jsx节点元素
   */
  function reconcileChildren(wipFiber, elements) {
    let index = 0;
    let oldFiber = wipFiber.alternate && wipFiber.alternate.child;
    let prevSibling = null;

    
    while (index < elements.length || oldFiber != null) {
      const element = elements[index];
      let newFiber = null;

      const sameType = oldFiber && element && element.type == oldFiber.type;

      // 更新
       // 如果类型一样，复用节点，更新props
      if (sameType) {
        newFiber = {
          type: oldFiber.type,
          props: element.props,
          dom: oldFiber.dom,
          parent: wipFiber,
          alternate: oldFiber,//记录老状态
          effectTag: "UPDATE",
        };
      }

      // 如果类型不一样，有新的节点，创建新节点替换老节点
      if (element && !sameType) {
        newFiber = {
          type: element.type,
          props: element.props,
          dom: null,
          parent: wipFiber,
          alternate: null,//新增的没有老节点
          effectTag: "PLACEMENT",
        };
      }

      // 删除
      if (oldFiber && !sameType) {
        oldFiber.effectTag = "DELETION";
        deletions.push(oldFiber);
      }

      // 同时遍历旧fiber树
      if (oldFiber) {
        oldFiber = oldFiber.sibling;
      }

      // 父fiber的child指向第一个子fiber
      if (index === 0) {
        wipFiber.child = newFiber;
      } /* 当oldFiber != null时，需要判断element存在才设置sibling */ else if (
        element
      ) {
        // 如果存在兄弟节点，通过sibling关联
        prevSibling.sibling = newFiber;
      }

      // 暂存上一个兄弟节点
      prevSibling = newFiber;
      index++;
    }
  }

  const Didact = {
    createElement,
    render,
  };
  /** @jsx Didact.createElement */
  const element = (
    <div id="foo">
      <a>bar</a>
      <b />
    </div>
  );
  /** @jsx Didact.createElement */
  const element2 = (
    <div id="foo">
      <h1>hello</h1>
      <a style="color: red;">bar</a>
      <b />
    </div>
  );

  const container = document.getElementById("root");
  Didact.render(element, container);

  setTimeout(() => {
    Didact.render(element2, container);
  }, 1000);
};
