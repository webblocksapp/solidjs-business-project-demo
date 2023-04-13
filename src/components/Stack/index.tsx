import { Component } from 'solid-js';
import { Stack as SuidStack } from '@suid/material';

type SuidStackProps = Parameters<typeof SuidStack>[0];
export interface StackProps extends SuidStackProps {}

export const Stack: Component<StackProps> = (props) => {
  return <SuidStack {...props} />;
};
