import { Component } from 'solid-js';
import { Button as SuidButton } from '@suid/material';

type SuidButtonProps = Parameters<typeof SuidButton>[0];
export interface ButtonProps extends SuidButtonProps {}

export const Button: Component<ButtonProps> = (props) => {
  return <SuidButton {...props} />;
};
