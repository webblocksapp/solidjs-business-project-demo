import { Component } from 'solid-js';
import { MenuItem as SuidMenuItem } from '@suid/material';

type SuidMenuItemProps = Parameters<typeof SuidMenuItem>[0];
export interface MenuItemProps extends SuidMenuItemProps {}

export const MenuItem: Component<MenuItemProps> = (props) => {
  return <SuidMenuItem {...props} />;
};
