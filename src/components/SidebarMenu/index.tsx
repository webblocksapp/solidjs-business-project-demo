import { Component, For } from 'solid-js';
import { ListItemIcon, ListItem, Wrap, Box, Typography } from '@components';
import { MenuItem as MenuItemType } from '@interfaces';
import { NavLink, useNavigate } from '@solidjs/router';
import './index.css';

export interface SidebarMenuProps {
  items: MenuItemType[];
}

export const SidebarMenu: Component<SidebarMenuProps> = (props) => {
  const navigate = useNavigate();

  return (
    <Box padding="$2">
      <For each={props.items}>
        {(item) => (
          <Box onClick={item.route ? () => navigate(item.route!) : undefined}>
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
              <Typography>{item.text}</Typography>
            </Wrap>
          </Box>
        )}
      </For>
    </Box>
  );
};
