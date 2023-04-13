import { Component } from 'solid-js';
import { TableCell as SuidTableCell } from '@suid/material';

type SuidTableCellProps = Parameters<typeof SuidTableCell>[0];
export type TableCellProps = SuidTableCellProps & {};

export const TableCell: Component<TableCellProps> = (props) => {
  return <SuidTableCell {...props} />;
};
