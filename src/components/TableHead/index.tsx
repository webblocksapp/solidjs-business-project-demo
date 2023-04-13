import { Component } from 'solid-js';
import { TableHead as SuidTableHead } from '@suid/material';

type SuidTableHeadProps = Parameters<typeof SuidTableHead>[0];
export type TableHeadProps = SuidTableHeadProps & {};

export const TableHead: Component<TableHeadProps> = (props) => {
  return <SuidTableHead {...props} />;
};
