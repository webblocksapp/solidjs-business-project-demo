import { Component } from 'solid-js';
import { Table as HuiTable, TableProps as HuiTableProps } from '@hope-ui/solid';

export interface TableProps extends HuiTableProps {}

export const Table: Component<TableProps> = (props) => {
  return <HuiTable {...props} />;
};
