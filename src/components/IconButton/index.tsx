import { Component } from 'solid-js';
import { IconButton as HuiIconButton, IconButtonProps as HuiIconButtonProps } from '@hope-ui/solid';

export interface IconButtonProps extends HuiIconButtonProps {}

export const IconButton: Component<IconButtonProps> = (props) => {
  return <HuiIconButton {...props} />;
};
