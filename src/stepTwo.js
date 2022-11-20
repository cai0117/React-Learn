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
