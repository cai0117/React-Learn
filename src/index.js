//让react调用我们自己实现的createElement
/** @jsxRuntime classic */

//创建一个文本节点
function createTextElement(text){
    return {
        type: "TEXT_ELEMENT",
        props:{
            nodeValue:text,
            children:[],
        }
    }
}

//创建一个元素节点
function createElement(type,props,...children){
    return{
        type,
        props:{
            ...props,
            children:children.map(child=>typeof child === "object" ? child : createTextElement(child))//判断是否为元素节点，如果是则创建否则创建文本节点
        }
    }
}

//创建渲染函数
function render(element,container){
    const dom = element.type === "TEXT_ELEMENT"  ? document.createTextNode(""):document.createElement(element.type);
    const isProperty = key=>key!=="children";
    Object.keys(element.props).filter(isProperty).forEach(name=>{dom[name] = element.props[name]});
    element.props.children.forEach(child=>render(child,dom));
    container.appendChild(dom);
}

const Didact={
    createElement,
    render
}
//告诉babel使用我们自己的渲染函数

/** @jsx Didact.createElement */
const element = (<div style="background: salmon">
    <h1>Hello World</h1>
    <h2 style="text-align:right">from Didact</h2>
</div>);//定义一个需要展示的jsx

const container = document.getElementById("root");

//渲染
Didact.render(element,container);

