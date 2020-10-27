// eslint-disable-next-line @typescript-eslint/ban-types
export const createStore = <S extends object>(
  initialState: Partial<S> = {},
) => {
  let state = initialState;
  let listeners = [];

  const getState = () => {
    return state;
  };

  const subscribe = (newListener) => {
    listeners.push(newListener);

    const unsubscribe = () => {
      listeners = listeners.filter((l) => l !== newListener);
    };

    return unsubscribe;
  };

  const setState = (newState) => {
    state = {
      ...state,
      ...newState,
    };

    console.log({
      listeners,
      state,
    });

    listeners.map((listener) => {
      listener();
    });

    return state;
  };

  return {
    getState,
    setState,
    subscribe,
  };
};
