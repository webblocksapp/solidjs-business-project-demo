import { Component } from 'solid-js';
import { GridItem as HuiGridItem, GridItemProps as HuiGridItemProps } from '@hope-ui/solid';

export interface GridItemProps extends HuiGridItemProps {}

export const GridItem: Component<GridItemProps> = (props) => {
  return <HuiGridItem {...props} />;
};
