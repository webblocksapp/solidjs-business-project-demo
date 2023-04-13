import { Component } from 'solid-js';
import { Table as SuidTable } from '@suid/material';

type SuidTableProps = Parameters<typeof SuidTable>[0];
export interface TableProps extends SuidTableProps {}

export const Table: Component<TableProps> = (props) => {
  return <SuidTable {...props} />;
};
