import { Component } from 'solid-js';
import { Box, BoxProps } from '@components';

export interface ToolbarProps extends BoxProps {}

export const Toolbar: Component<ToolbarProps> = (props) => {
  return <Box {...props} />;
};
