import { Component } from 'solid-js';
import { Th as HuiTableHead, ThProps as HuiTableHeadProps } from '@hope-ui/solid';

export type TableHeadProps = HuiTableHeadProps & {};

export const TableHead: Component<TableHeadProps> = (props) => {
  return <HuiTableHead {...props} />;
};
