import { Component } from 'solid-js';
import { Tbody as HuiTableBody, TbodyProps as HuiTableBodyProps } from '@hope-ui/solid';

export interface TableBodyProps extends HuiTableBodyProps {}

export const TableBody: Component<TableBodyProps> = (props) => {
  return <HuiTableBody {...props} />;
};
