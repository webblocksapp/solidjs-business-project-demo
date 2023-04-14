import { Component } from 'solid-js';
import { MenuItem as HuiMenuItem, MenuItemProps as HuiMenuItemProps } from '@hope-ui/solid';

export interface MenuItemProps extends HuiMenuItemProps {}

export const MenuItem: Component<MenuItemProps> = (props) => {
  return <HuiMenuItem {...props} />;
};
