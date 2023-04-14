import { Component } from 'solid-js';
import { Text as HuiTypography, TextProps as HuiTypographyProps } from '@hope-ui/solid';

export interface TypographyProps extends HuiTypographyProps {}

export const Typography: Component<TypographyProps> = (props) => {
  return <HuiTypography {...props} />;
};
