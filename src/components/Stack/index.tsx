import { Component } from 'solid-js';
import { Stack as HuiStack, StackProps as HuiStackProps } from '@hope-ui/solid';

export interface StackProps extends HuiStackProps {}

export const Stack: Component<StackProps> = (props) => {
  return <HuiStack {...props} />;
};
