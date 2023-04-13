import { Component } from 'solid-js';
import { TextField as SuidTextField } from '@suid/material';

type SuidTextFieldProps = Parameters<typeof SuidTextField>[0];
export type TextFieldProps = SuidTextFieldProps & {};

export const TextField: Component<TextFieldProps> = (props) => {
  return <SuidTextField {...props} />;
};
