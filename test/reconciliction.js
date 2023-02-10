
function mountState<S>(
    initialState: (() => S) | S,
  ): [S, Dispatch<BasicStateAction<S>>] {
    const hook = mountWorkInProgressHook();
    if (typeof initialState === 'function') {
      // $FlowFixMe: Flow doesn't like mixed types
      initialState = initialState(); // 这里考虑了函数和普通值的两种情况
    }
    hook.memoizedState = hook.baseState = initialState; //赋初始值
    const queue: UpdateQueue<S, BasicStateAction<S>> = {
      pending: null,
      lanes: NoLanes, //调度优先级
      dispatch: null,
      lastRenderedReducer: basicStateReducer,
      lastRenderedState: (initialState: any), //处理特定情况下的优化
    };
    hook.queue = queue;
    const dispatch = (queue.dispatch = (dispatchSetState.bind(
      null,
      currentlyRenderingFiber,
      queue,
    ): any)) //绑定了当前fiber和queue的dispatchAction
    return [hook.memoizedState, dispatch];
  }
  
  //其实，useState 就是一个预置了 reducer 的 useReducer，预置的 reducer 就是 basicStateReducer
  function updateState<S>(
    initialState: (() => S) | S,
  ): [S, Dispatch<BasicStateAction<S>>] {
    return updateReducer(basicStateReducer, (initialState: any));
  }
  
  function rerenderState<S>(
    initialState: (() => S) | S,
  ): [S, Dispatch<BasicStateAction<S>>] {
    return rerenderReducer(basicStateReducer, (initialState: any));
  }


  function basicStateReducer<S>(state: S, action: BasicStateAction<S>): S {
    // $FlowFixMe: Flow doesn't like mixed types
    return typeof action === 'function' ? action(state) : action;
  }



/**
 * 创建一个 hook 对象
 * 若这是第一个 hook，挂载到 memoizedState
 * 若不是第一个hook的话，就会把他挂载到上一个 hook的 next 指针下，与上一个hook形成一条链表
 * 返回 该hook 对象
 */

  function mountWorkInProgressHook(): Hook {
    const hook: Hook = {  //创建一个Hook对象
      memoizedState: null,
  
      baseState: null,
      baseQueue: null,  //baseState和baseQueue 指在存在优先级的情况下，通过update来计算state
      queue: null,
  
      next: null,
    };
  
    if (workInProgressHook === null) {
      // This is the first hook in the list
      currentlyRenderingFiber.memoizedState = workInProgressHook = hook; //第一个hook挂载到memoizedState
    } else {
      // Append to the end of the list
      workInProgressHook = workInProgressHook.next = hook; //不是第一个就挂载到next指针下，形成链表
    }
    return workInProgressHook;
  }