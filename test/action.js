let workInProgressHook;


let isMount = true;






const fiber={
    memoizedState:null,

    stateNode:App
}

function schedule(){

    workInProgressHook = fiber.memoizedState;

    const app = fiber.stateNode();

    isMount = false;
    return app;
}
const update = {
    action,

    next:null,
}


function dispatchAction(queue,action){
    const update = {
        action,
    
        next:null,
    }

    if(queue.pending === null){
        queue.pending = update;
    }else{
        update.next = queue.pending.next;
        queue.pending.next = update;
    }

    queue.pending = update;

    schedule()
}


hook = {
    queue:{
        pending:null
    },

    memoizedState:initialState,

    next:null
}


function useState(initialState){

    let hook;

    if(isMount){

        hook = {
            queue:{
                pending:null
            },
        
            memoizedState:initialState,
        
            next:null
        }

        if(!fiber.memoizedState){
            fiber.memoizedState = hook;
        }else{
            workInProgressHook.next = hook;
        }

        workInProgressHook = hook;
    }else{
        hook = workInProgressHook;
        workInProgressHook = workInProgressHook.next;
    }


    let baseState = hook.memoizedState;

    if(hook.queue.pending){

        let firstUpdate = hook.queue.pending.next;
        do {
            const action = firstUpdate.action;
            baseState = action(baseState);
            firstUpdate = firstUpdate.next;
        }while (firstUpdate !== hook.queue.pending)

        hook.queue.pending = null;
    }

    hook.memoizedState = baseState;

    return [baseState,dispatchAction.bind(null, hook.queue)]


}


function App(){
    const [num,updateNum] = useState(0);

    console.log(`${isMount ? 'mount' : 'update'} num: `, num);

  return {click() {
    updateNum(num => num + 1);
    updateNum(num => num + 1);
    updateNum(num => num + 1);
  }}
}

window.app = schedule();