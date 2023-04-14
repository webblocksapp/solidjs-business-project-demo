import { Component } from 'solid-js';
import { Menu as HuiMenuList } from '@hope-ui/solid';

type HuiMenuListProps = Parameters<typeof HuiMenuList>[0];
export interface MenuListProps extends HuiMenuListProps {}

export const MenuList: Component<MenuListProps> = (props) => {
  return <HuiMenuList {...props} />;
};
