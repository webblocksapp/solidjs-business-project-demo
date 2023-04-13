import { Component } from 'solid-js';
import { AppBar as SuidAppBar } from '@suid/material';

type SuidAppBarProps = Parameters<typeof SuidAppBar>[0];
export interface AppBarProps extends SuidAppBarProps {}

export const AppBar: Component<AppBarProps> = (props) => {
  return <SuidAppBar {...props} />;
};
