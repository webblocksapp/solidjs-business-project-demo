import { Component } from 'solid-js';
import { ListItem as HuiListItemText, ListItemProps as HuiListItemTextProps } from '@hope-ui/solid';

export interface ListItemTextProps extends HuiListItemTextProps {}

export const ListItemText: Component<ListItemTextProps> = (props) => {
  return <HuiListItemText {...props} />;
};
