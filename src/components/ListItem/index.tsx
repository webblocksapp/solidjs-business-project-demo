import { Component } from 'solid-js';
import { ListItem as HuiListItem, ListItemProps as HuiListItemProps } from '@hope-ui/solid';

export interface ListItemProps extends HuiListItemProps {}

export const ListItem: Component<ListItemProps> = (props) => {
  return <HuiListItem {...props} />;
};
