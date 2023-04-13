import { Component } from 'solid-js';
import { Alert as SuidAlert } from '@suid/material';

type SuidAlertProps = Parameters<typeof SuidAlert>[0];
export interface AlertProps extends SuidAlertProps {}

export const Alert: Component<AlertProps> = (props) => {
  return <SuidAlert {...props} />;
};
