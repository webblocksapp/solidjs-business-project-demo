import { Component, JSXElement, Match, Switch } from 'solid-js';

export interface WrapProps {
  children: JSXElement;
  when: boolean;
  with: (props: { children: JSXElement }) => JSXElement;
}

export const Wrap: Component<WrapProps> = (props) => {
  return (
    <Switch fallback={props.children}>
      <Match when={props.when}>{props.with(props)}</Match>
    </Switch>
  );
};
