import { Component } from 'solid-js';
import { Box as HuiBox } from '@hope-ui/solid';

type HuiBoxProps = Parameters<typeof HuiBox>[0];
export interface BoxProps extends HuiBoxProps {}

export const Box: Component<BoxProps> = (props) => {
  return <HuiBox {...props} />;
};
