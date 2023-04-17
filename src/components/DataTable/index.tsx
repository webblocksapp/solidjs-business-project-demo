import {
  Box,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  GridItem,
  Alert,
  Pagination,
  PaginationProps,
} from '@components';
import { Pagination as PaginationType, DataTableColumn } from '@interfaces';
import { Component, For, Match, Show, Switch, mergeProps } from 'solid-js';

export interface DataTableProps {
  columns: Array<DataTableColumn>;
  data: Array<any>;
  error?: string;
  pagination: PaginationType;
  loading?: boolean;
  onPageChange?: (page: number) => void;
  onRowsPerPageChange?: (limit: number) => void;
}

export const DataTable: Component<DataTableProps> = (props) => {
  props = mergeProps({ count: 0, limit: 0, page: 0 }, props);

  const renderRow = (row: any, index: number) => {
    if (index >= props.pagination.limit) return <></>;

    return (
      <TableRow>
        <For each={props.columns}>
          {(column) => (
            <Switch fallback={<TableCell>{row[column.path!]}</TableCell>}>
              <Match when={column.cellTemplate}>
                <TableCell>{column.cellTemplate!(row)}</TableCell>
              </Match>
            </Switch>
          )}
        </For>
      </TableRow>
    );
  };

  const onPageChange: PaginationProps['onPageChange'] = (page) => {
    props?.onPageChange?.(page);
  };

  // const onRowsPerPageChange: TablePaginationProps['onRowsPerPageChange'] = (e) => {
  //   props?.onRowsPerPageChange?.(Number(e.target.value));
  // };

  return (
    <Show
      when={props.error}
      fallback={
        <>
          <Table style={{ opacity: props.loading ? 0.4 : undefined }}>
            <TableHead>
              <TableRow>
                <For each={props.columns}>{(column) => <TableCell>{column.label}</TableCell>}</For>
              </TableRow>
            </TableHead>
            <TableBody>
              <For each={props.data}>{(row, i) => renderRow(row, i())}</For>
            </TableBody>
          </Table>
          <Show when={props.pagination.count}>
            <Box displayRaw="flex" justifyContent="center" mt={2}>
              <Pagination
                count={props.pagination.count}
                page={props.pagination.page}
                onPageChange={onPageChange}
                rowsPerPage={props.pagination.limit}
                // onRowsPerPageChange={onRowsPerPageChange}
              />
            </Box>
          </Show>
        </>
      }
    >
      <GridItem>
        <Alert status="danger">{props.error}</Alert>
      </GridItem>
    </Show>
  );
};
