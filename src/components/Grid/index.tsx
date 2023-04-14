import { Component } from 'solid-js';
import { Grid as HuiGrid, GridProps as HuiGridProps } from '@hope-ui/solid';

export interface GridProps extends HuiGridProps {}

export const Grid: Component<GridProps> = (props) => {
  return <HuiGrid {...props} />;
};
