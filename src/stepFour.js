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

  function render(element, container) {
    nextUnitOfWork = {
      dom: container,
      props: {
        children: [element],
      },
    };
  }

  let nextUnitOfWork = null;

  function workLoop(deadline) {
    let shouldYield = false;
    while (nextUnitOfWork && !shouldYield) {
      // 执行单元任务
      nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
      // 通过剩余时间判断是否需要立刻交还执行权
      shouldYield = deadline.timeRemaining() < 1;
    }
    // 执行权交还给浏览器
    requestIdleCallback(workLoop);
  }

  requestIdleCallback(workLoop);

  //return的父节点不会作为下一个任务返回，只有sibling和child才会作为下一个任务返回
  function performUnitOfWork(fiber) {
    console.log(fiber);

    // 根节点的dom就是container，如果没有这个属性，说明当前fiber不是根节点
    if (!fiber.dom) {
      fiber.dom = createDom(fiber);
    }
    // 如果存在父节点，将dom挂载
    if (fiber.parent) {
      fiber.parent.dom.appendChild(fiber.dom);
    }

    //将虚拟dom转换为fiber
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
        // 每个子元素拥有指向下一个子元素的指针
        // 如果存在兄弟节点，通过sibling关联
        prevSibling.sibling = newFiber;
      }
      // 暂存上一个兄弟节点
      prevSibling = newFiber;
      index++;
    }

    // 设置一个Fiber对象作为下一个单元任务
    // 这个函数的返回值是下一个任务，这其实是一个深度优先遍历
    // 先找子元素，没有子元素了就找兄弟元素
    // 兄弟元素也没有了就返回父元素
    // 然后再找这个父元素的兄弟元素
    // 最后到根节点结束
    // 这个遍历的顺序其实就是从上到下，从左到右
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
