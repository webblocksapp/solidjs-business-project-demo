import {
  Accessor,
  Component,
  JSXElement,
  createContext,
  createEffect,
  createSignal,
  useContext,
} from 'solid-js';

export interface SkeletonProps {
  children: JSXElement;
  loading: boolean;
}

const SkeletonContext = createContext<{ loaded: Accessor<boolean> }>({ loaded: () => true });
export const useSkeletonContext = () => useContext(SkeletonContext);

export const Skeleton: Component<SkeletonProps> = (props) => {
  const [loaded, setLoaded] = createSignal(true);

  createEffect(() => {
    setLoaded(!props.loading);
  });

  return (
    <SkeletonContext.Provider value={{ loaded: loaded }}>{props.children}</SkeletonContext.Provider>
  );
};
