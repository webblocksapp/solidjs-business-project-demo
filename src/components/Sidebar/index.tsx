import { Component, mergeProps } from 'solid-js';
import { Box, BoxProps } from '@components';

export interface SidebarProps extends BoxProps {}

export const Sidebar: Component<SidebarProps> = (props) => {
  props = mergeProps({ boxShadow: 1 }, props);
  return <Box {...props} />;
};
