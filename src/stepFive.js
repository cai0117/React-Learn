/**上面我们的performUnitOfWork一边构建Fiber结构一边操作DOMappendChild，
 * 这样如果某次更新好几个节点，操作了第一个节点之后就中断了，
 * 那我们可能只看到第一个节点渲染到了页面，后续几个节点等浏览器空了才陆续渲染
 * 将DOM操作都搜集起来，最后统一执行
 */

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
    const isProperty = (key) => key !== "children";
    Object.keys(fiber.props)
      .filter(isProperty)
      .forEach((name) => {
        dom[name] = fiber.props[name];
      });
    return dom;
  }

  function commitRoot() {
    // 从根节点的child开始
    commitWork(wipRoot.child);
    // 完成后置空进行中根节点
    wipRoot = null;
  }

  function commitWork(fiber) {
    console.log(fiber);

    // child和sibling可能为undefined
    if (!fiber) {
      return;
    }
    const domParent = fiber.parent.dom;
    //挂载到dom上
    domParent.appendChild(fiber.dom);
    commitWork(fiber.child);
    commitWork(fiber.sibling);
  }

  function render(element, container) {
    wipRoot = {
      dom: container,
      props: {
        children: [element],
      },
    };
    nextUnitOfWork = wipRoot;
  }

  let nextUnitOfWork = null;
  let wipRoot = null;

  function workLoop(deadline) {
    let shouldYield = false;
    while (nextUnitOfWork && !shouldYield) {
      // 执行单元任务
      nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
      // 通过剩余时间判断是否需要立刻交还执行权
      shouldYield = deadline.timeRemaining() < 1;
    }
    //全部执行完就提交
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
    let index = 0;
    let prevSibling = null;

    while (index < elements.length) {
      const element = elements[index];
      const newFiber = {
        type: element.type,
        props: element.props,
        parent: fiber,
        dom: null,
      };
      // 父fiber的child指向第一个子fiber
      if (index === 0) {
        fiber.child = newFiber;
      } else {
        // 如果存在兄弟节点，通过sibling关联
        prevSibling.sibling = newFiber;
      }
      // 暂存上一个兄弟节点
      prevSibling = newFiber;
      index++;
    }

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

  const container = document.getElementById("root");
  Didact.render(element, container);
};
