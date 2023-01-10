
//指向当前正在执行的hooks
let workInProgressHook;
// 在 react 中，会通过判断 currentFiber 是否存在，来区别是 mount 还是 update
// 在这个简易版本中，通过一个 全局变量来区分
let isMount = true;


// 函数组件有一个对应的 fiber
const fiber = {

   /**
     * memorizedState 属性用于保存 hooks
     * 是使用的 链表的结构来保存的hooks
     */
  memoizedState: null,
  stateNode: App
};
//模拟React的调度
function schedule() {
  //初始化hooks为第一个hook
  workInProgressHook = fiber.memoizedState;

  //模拟render阶段，render阶段会触发App函数
  const app = fiber.stateNode();
  isMount = false;
  return app;
}


// 作用：创建 update，并将 update 连成一条环状链表
 // 这样我们在调用 useState 中，才能从 hook.queue.pending 中取到这条环状链表
function dispatchAction(queue, action) {
  const update = {
    action,
    next:null
  }
  if (queue.pending === null) {
    update.next = update; // 第一个 update 会与自己形成 环状链表
  } else {

    // 环形链表操作
    // 例子： 3 -> 0 -> 1 -> 2 -> 3
    // 转变为 4 -> 0 -> 1 -> 2 -> 3 -> 4  
    
    
    // update 代表当前的 update，queue.pending.next 代表 第一个,
    // 即实现 从 3 -> 0 变为 4 -> 0 
    update.next = queue.pending.next;

    // 实现 从 -> 3 变为 3 -> 4   
    queue.pending.next = update;
  }
  queue.pending = update;  // queue.pending 指向的是最后一个 update 

  schedule();
}

function useState(initialState) {
  let hook;

  if (isMount) { //mount阶段
    //创建hooks链表
    hook = {
      queue: {
        pending: null
      },
      memoizedState: initialState,
      next: null
    }
    // 将hook插入fiber.memoizedState链表末尾
    if (!fiber.memoizedState) {
      fiber.memoizedState = hook;
    } else {
      workInProgressHook.next = hook;
    }
    // 移动workInProgressHook指针
    workInProgressHook = hook; 
  } else {
    // update时找到对应hook
    hook = workInProgressHook;
    // 移动workInProgressHook指针
    workInProgressHook = workInProgressHook.next;
  }

  // 此时 hook 变量就是当前的 hook 对象
  // 省略了 state 优先级的考虑，所以只需要实现 state 中的 baseState
  // 即baseState 就是 memorizedState

  // update执行前的初始state
  let baseState = hook.memoizedState;
  if (hook.queue.pending) {
    // 获取update环状单向链表中第一个update
    let firstUpdate = hook.queue.pending.next;


    // 遍历链表
    do {
      // 执行update action
      const action = firstUpdate.action;
      baseState = action(baseState);
      firstUpdate = firstUpdate.next;
    } while (firstUpdate !== hook.queue.pending)

    // 清空queue.pending
    hook.queue.pending = null;
  }

  // 将update action执行完后的state作为memoizedState
  hook.memoizedState = baseState;

  return [baseState, dispatchAction.bind(null, hook.queue)];
}

function App() {
  const [num, updateNum] = useState(0);

  console.log(`${isMount ? 'mount' : 'update'} num: `, num);

  return {click() {
    updateNum(num => num + 1);
    updateNum(num => num + 1);
    updateNum(num => num + 1);
  }}
}

window.app = schedule();