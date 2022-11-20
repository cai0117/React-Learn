/** @jsxRuntime classic */
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      // 思考：为什么不需要处理object类型的child？
      children: children.map((child) => (typeof child === 'object' ? child : createTextElement(child))),
    },
  };
}
function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

const Didact = {
  createElement,
};
/** @jsx Didact.createElement */
const element = (
  <div id='foo'>
    <a>bar</a>
    <b />
  </div>
);
export default ()=>{
  console.log(element);
}


