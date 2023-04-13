import { Component } from 'solid-js';
import { TableRow as SuidTableRow } from '@suid/material';

type SuidTableRowProps = Parameters<typeof SuidTableRow>[0];
export type TableRowProps = SuidTableRowProps & {};

export const TableRow: Component<TableRowProps> = (props) => {
  return <SuidTableRow {...props} />;
};
