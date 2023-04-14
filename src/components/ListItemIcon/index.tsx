import { Component } from 'solid-js';
import { ListIcon as HuiListItemIcon } from '@hope-ui/solid';

type HuiListItemIconProps = Parameters<typeof HuiListItemIcon>[0];
export type ListItemIconProps = HuiListItemIconProps & {};

export const ListItemIcon: Component<ListItemIconProps> = (props) => {
  return <HuiListItemIcon {...props} />;
};
