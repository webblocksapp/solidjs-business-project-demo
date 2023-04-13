import { Component } from 'solid-js';
import { Box as SuidBox } from '@suid/material';

type SuidBoxProps = Parameters<typeof SuidBox>[0];
export interface BoxProps extends SuidBoxProps {}

export const Box: Component<BoxProps> = (props) => {
  return <SuidBox {...props} />;
};
