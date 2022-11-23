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

  function render(element, container) {
    const dom =
      element.type === "TEXT_ELEMENT"
        ? document.createTextNode("")
        : document.createElement(element.type);

    // 不为children的属性都复制到dom节点上
    const isProperty = (key) => key !== "children";
    Object.keys(element.props)
      .filter(isProperty)
      .forEach((name) => {
        dom[name] = element.props[name];
      });

    // 递归构建dom树
    element.props.children.forEach((child) => render(child, dom));

    // 挂载到父节点
    container.appendChild(dom);
  }

 /**
  * React的diff算法是经过优化的，但是他却是同步的，
  * renderer负责操作DOM的appendChild等API也是同步的，也就是说如果有大量节点需要更新
  * ，JS线程的运行时间可能会比较长，在这段时间浏览器是不会响应其他事件的，因为JS线程和GUI线程是互斥的，
  * JS运行时页面就不会响应，这个时间太长了，用户就可能看到卡顿，特别是动画的卡顿会很明显
  * */
 //https://juejin.cn/post/6844904197008130062#heading-5
  //实现reconsiler(diff算法)
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

  function performUnitOfWork(nextUnitOfWork) {
    // TODO 处理单元任务
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
