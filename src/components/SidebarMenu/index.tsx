import { Component, For } from 'solid-js';
import { ListItemIcon, ListItemText, MenuItem, MenuList, Wrap } from '@components';
import { MenuItem as MenuItemType } from '@interfaces';
import { NavLink, useNavigate } from '@solidjs/router';
import './index.css';

export interface SidebarMenuProps {
  items: MenuItemType[];
}

export const SidebarMenu: Component<SidebarMenuProps> = (props) => {
  const navigate = useNavigate();

  return (
    <MenuList>
      <For each={props.items}>
        {(item) => (
          <MenuItem onClick={item.route ? () => navigate(item.route!) : undefined}>
            <Wrap
              when={Boolean(item.route)}
              with={(props) => (
                <NavLink
                  onClick={(event) => event.preventDefault()}
                  href={item.route!}
                  classList={{ 'sidebar-item': true }}
                >
                  {props.children}
                </NavLink>
              )}
            >
              {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
              <ListItemText>{item.text}</ListItemText>
            </Wrap>
          </MenuItem>
        )}
      </For>
    </MenuList>
  );
};
