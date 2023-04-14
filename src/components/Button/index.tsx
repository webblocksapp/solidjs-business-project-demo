import { Component } from 'solid-js';
import { Button as HuiButton, ButtonProps as HuiButtonProps } from '@hope-ui/solid';

export interface ButtonProps extends HuiButtonProps {}

export const Button: Component<ButtonProps> = (props) => {
  return <HuiButton {...props} />;
};
