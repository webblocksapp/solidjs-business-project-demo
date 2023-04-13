import { Component } from 'solid-js';
import { ListItemText as SuidListItemText } from '@suid/material';

type SuidListItemTextProps = Parameters<typeof SuidListItemText>[0];
export interface ListItemTextProps extends SuidListItemTextProps {}

export const ListItemText: Component<ListItemTextProps> = (props) => {
  return <SuidListItemText {...props} />;
};
