import { Component } from 'solid-js';
import { TableBody as SuidTableBody } from '@suid/material';

type SuidTableBodyProps = Parameters<typeof SuidTableBody>[0];
export interface TableBodyProps extends SuidTableBodyProps {}

export const TableBody: Component<TableBodyProps> = (props) => {
  return <SuidTableBody {...props} />;
};
