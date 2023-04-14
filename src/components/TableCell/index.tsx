import { Component } from 'solid-js';
import { Td as HuiTableCell, TdProps as HuiTableCellProps } from '@hope-ui/solid';

export type TableCellProps = HuiTableCellProps & {};

export const TableCell: Component<TableCellProps> = (props) => {
  return <HuiTableCell {...props} />;
};
