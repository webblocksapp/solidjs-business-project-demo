import { Component } from 'solid-js';
import { IconButton as SuidIconButton } from '@suid/material';

type SuidIconButtonProps = Parameters<typeof SuidIconButton>[0];
export interface IconButtonProps extends SuidIconButtonProps {}

export const IconButton: Component<IconButtonProps> = (props) => {
  return <SuidIconButton {...props} />;
};
