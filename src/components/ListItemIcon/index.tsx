import { Component } from 'solid-js';
import { ListItemIcon as SuidListItemIcon } from '@suid/material';

type SuidListItemIconProps = Parameters<typeof SuidListItemIcon>[0];
export interface ListItemIconProps extends SuidListItemIconProps {}

export const ListItemIcon: Component<ListItemIconProps> = (props) => {
  return <SuidListItemIcon {...props} />;
};
