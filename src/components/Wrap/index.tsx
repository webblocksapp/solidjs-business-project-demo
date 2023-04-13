import { Component, JSXElement, Match, Switch } from 'solid-js';

export interface WrapProps {
  children: JSXElement;
  when: boolean;
  with: (props: { children: JSXElement }) => JSXElement;
}

export const Wrap: Component<WrapProps> = (props) => {
  const Wrapper = props.with;

  return (
    <Switch fallback={props.children}>
      <Match when={props.when}>
        <Wrapper>{props.children}</Wrapper>
      </Match>
    </Switch>
  );
};
