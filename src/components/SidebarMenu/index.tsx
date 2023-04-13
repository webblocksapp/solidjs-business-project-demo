import { Component, For } from 'solid-js';
import { ListItemIcon, ListItemText, MenuItem, MenuList, Wrap } from '@components';
import { MenuItem as MenuItemType } from '@interfaces';
import { NavLink } from '@solidjs/router';
import './index.css';

export interface SidebarMenuProps {
  items: MenuItemType[];
}

export const SidebarMenu: Component<SidebarMenuProps> = (props) => {
  return (
    <MenuList>
      <For each={props.items}>
        {(item) => (
          <Wrap
            when={Boolean(item.route)}
            with={(props) => (
              <NavLink href={item.route!} classList={{ 'sidebar-item': true }}>
                {props.children}
              </NavLink>
            )}
          >
            <MenuItem>
              {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
              <ListItemText>{item.text}</ListItemText>
            </MenuItem>
          </Wrap>
        )}
      </For>
    </MenuList>
  );
};
