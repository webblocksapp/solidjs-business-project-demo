import { Component } from 'solid-js';
import { Grid as SuidGrid } from '@suid/material';

type SuidGridProps = Parameters<typeof SuidGrid>[0];
export interface GridProps extends SuidGridProps {}

export const Grid: Component<GridProps> = (props) => {
  return <SuidGrid {...props} />;
};
