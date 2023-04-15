import { Component } from 'solid-js';
import { Thead as HuiTableHead, TheadProps as HuiTableHeadProps } from '@hope-ui/solid';

export type TableHeadProps = HuiTableHeadProps & {};

export const TableHead: Component<TableHeadProps> = (props) => {
  return <HuiTableHead {...props} />;
};
