import { useEffect, useState } from 'react';

import { initialState, store } from './dataLayer';

// eslint-disable-next-line @typescript-eslint/ban-types
export const useStore = <S extends object>(): [S, (s: S) => S] => {
  const [storeState, setStoreState] = useState(initialState);

  useEffect(() => {
    const listen = () => {
      const state = store.getState();

      setStoreState(state);
    };

    const unsubscribe = store.subscribe(listen);

    return () => {
      unsubscribe();
    };
  }, []);

  const set = (newState) => {
    const state = store.setState(newState);

    setStoreState(state);
  };

  return [storeState, set];
};
