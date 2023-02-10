
function rerenderReducer<S, I, A>(
    reducer: (S, A) => S,
    initialArg: I,
    init?: I => S,
  ): [S, Dispatch<A>] {
    const hook = updateWorkInProgressHook();
    const queue = hook.queue;
  
    if (queue === null) {
      throw new Error(
        'Should have a queue. This is likely a bug in React. Please file an issue.',
      );
    }
  
    queue.lastRenderedReducer = reducer;
  
    // This is a re-render. Apply the new render phase updates to the previous
    // work-in-progress hook.
    const dispatch: Dispatch<A> = (queue.dispatch: any);
    const lastRenderPhaseUpdate = queue.pending;
    let newState = hook.memoizedState;
    if (lastRenderPhaseUpdate !== null) {
      // The queue doesn't persist past this render pass.
      queue.pending = null;
  
      const firstRenderPhaseUpdate = lastRenderPhaseUpdate.next;
      let update = firstRenderPhaseUpdate;
      do {
        // Process this render phase update. We don't have to check the
        // priority because it will always be the same as the current
        // render's.
        const action = update.action;
        newState = reducer(newState, action);
        update = update.next;
      } while (update !== firstRenderPhaseUpdate);
  
      // Mark that the fiber performed work, but only if the new state is
      // different from the current state.
      if (!is(newState, hook.memoizedState)) {
        markWorkInProgressReceivedUpdate();
      }
  
      hook.memoizedState = newState;
      // Don't persist the state accumulated from the render phase updates to
      // the base state unless the queue is empty.
      // TODO: Not sure if this is the desired semantics, but it's what we
      // do for gDSFP. I can't remember why.
      if (hook.baseQueue === null) {
        hook.baseState = newState;
      }
  
      queue.lastRenderedState = newState;
    }
    return [newState, dispatch];
  }