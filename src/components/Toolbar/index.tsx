import { Component } from 'solid-js';
import { Toolbar as SuidToolbar } from '@suid/material';

type SuidToolbarProps = Parameters<typeof SuidToolbar>[0];
export interface ToolbarProps extends SuidToolbarProps {}

export const Toolbar: Component<ToolbarProps> = (props) => {
  return <SuidToolbar {...props} />;
};
