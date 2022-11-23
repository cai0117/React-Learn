/**
 * jsx转换为js描述dom结构
 * 简单的jsx到渲染dom的过程
 */

const element = (
  <div>
    <h1 id="title">Title</h1>
    <a href="xxx">Jump</a>
    <section>
      <p>
        Article
      </p>
    </section>
  </div>
);
 /*#__PURE__*/ //是无副作用的意思
//  https://babeljs.io/repl //babel在线编译预览
//会被babel编译成如下格式

// var App = React.createElement(
//   'div',
//   null,
//   React.createElement(
//     'h1',
//     {
//       id: 'title',
//     },
//     'Title',
//   ),
//   React.createElement(
//     'a',
//     {
//       href: 'xxx',
//     },
//     'Jump',
//   ),
//   React.createElement(
//     'section',
//     null,
//     React.createElement('p', null, 'Article'),
//   ),
// );
const container = document.getElementById('root');
ReactDOM.render(element, container);













//对于<h1 id="title">Title</h1>这样一个简单的节点，原生DOM也会附加一大堆属性和方法在上面，所以我们在createElement的时候最好能将它转换为一种比较简单的数据结构，只包含我们需要的元素
/** @jsxRuntime classic */
export default () => {
  /** @jsx Didact.createElement */
  const element = {
    type: "h1",
    props: {
      title: "foo",
      children: "Hello",
    },
  };
  const container = document.getElementById("root");
  const node = document.createElement(element.type);
  node.title = element.props.title;
  const text = document.createTextNode("");
  text.nodeValue = element.props.children;
  node.appendChild(text);
  container.appendChild(node);
};
