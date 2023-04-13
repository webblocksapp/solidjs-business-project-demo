import { Component } from 'solid-js';
import { TableContainer as SuidTableContainer } from '@suid/material';

type SuidTableContainerProps = Parameters<typeof SuidTableContainer>[0];
export type TableContainerProps = SuidTableContainerProps & {};

export const TableContainer: Component<TableContainerProps> = (props) => {
  return <SuidTableContainer {...props} />;
};
