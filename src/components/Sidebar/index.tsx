import { Component, mergeProps } from 'solid-js';
import { Box, BoxProps } from '@components';

export interface SidebarProps extends BoxProps {}

export const Sidebar: Component<SidebarProps> = (props) => {
  props = mergeProps({ boxShadow: '$sm' }, props);
  return <Box {...props} />;
};
