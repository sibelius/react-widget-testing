import { useStore } from './useStore';

export const Widget = () => {
  const [storeState] = useStore();

  console.log({
    storeState,
  });

  return (
    <span>{storeState.message}</span>
  );
};
