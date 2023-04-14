import { Component } from 'solid-js';
import { Box, BoxProps } from '@components';

export interface AppBarProps extends BoxProps {}

export const AppBar: Component<BoxProps> = (props) => {
  return <Box {...props} />;
};
