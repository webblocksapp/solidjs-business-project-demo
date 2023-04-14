import { Component, splitProps } from 'solid-js';
import { Alert as HuiAlert, AlertProps as HuiAlertProps, AlertIcon, AlertTitle } from '@hope-ui/solid';

export interface AlertProps extends HuiAlertProps {}

export const Alert: Component<AlertProps> = (props) => {
  const [local, rest] = splitProps(props, ['children']);

  return (
    <HuiAlert {...rest}>
      <AlertIcon mr="$2_5" />
      <AlertTitle>{local.children}</AlertTitle>
    </HuiAlert>
  );
};
