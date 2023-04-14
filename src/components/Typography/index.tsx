import { Component } from 'solid-js';
import { Typography as SuidTypography } from '@suid/material';

type SuidTypographyProps = Parameters<typeof SuidTypography>[0];
export interface TypographyProps extends SuidTypographyProps {}

export const Typography: Component<TypographyProps> = (props) => {
  return <SuidTypography {...props} />;
};
