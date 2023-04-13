import { MenuList as SuidMenuList } from '@suid/material';
import { Component } from 'solid-js';

type SuidMenuListProps = Parameters<typeof SuidMenuList>[0];
export interface MenuListProps extends SuidMenuListProps {}

export const MenuList: Component<MenuListProps> = (props) => {
  return <SuidMenuList {...props} />;
};
