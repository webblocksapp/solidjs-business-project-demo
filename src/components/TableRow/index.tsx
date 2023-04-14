import { Component } from 'solid-js';
import { Tr as HuiTableRow, TrProps as HuiTableRowProps } from '@hope-ui/solid';

export type TableRowProps = HuiTableRowProps & {};

export const TableRow: Component<TableRowProps> = (props) => {
  return <HuiTableRow {...props} />;
};
