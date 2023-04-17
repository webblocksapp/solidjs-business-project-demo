import { Component, For, Show, createEffect, createSignal, mergeProps, untrack } from 'solid-js';
import { Button, Stack } from '@components';

export interface PaginationProps {
  count: number;
  rowsPerPage: number;
  page?: number;
  showFirstButton?: boolean;
  showLastButton?: boolean;
  onPageChange?: (page: number) => void;
}

export const Pagination: Component<PaginationProps> = (props) => {
  props = mergeProps({ showFirstButton: true, showLastButton: true }, props);
  const [page, setPage] = createSignal(1);
  const [pages, setPages] = createSignal(0);

  const prev = () => {
    if (page() > 1) {
      setPage((prev) => prev - 1);
      onPageChange();
    }
  };

  const next = () => {
    if (page() < pages()) {
      setPage((prev) => prev + 1);
      onPageChange();
    }
  };

  const setCurrentPage = (index: number) => {
    setPage(index + 1);
    props?.onPageChange?.(page());
  };

  const onPageChange = () => {
    props?.onPageChange?.(page());
  };

  createEffect(() => {
    untrack(() => page()) > 0 && props.page && setPage(props.page);
  });

  createEffect(() => {
    setPages(Math.ceil(props.count / props.rowsPerPage));
  });

  return (
    <Stack direction="row" columnGap={2}>
      <Show when={props.showFirstButton}>
        <Button onClick={prev}>&lt;</Button>
      </Show>
      <For each={Array.from(Array(pages()).keys())}>
        {(_, i) => (
          <Button
            colorScheme={i() + 1 === page() ? 'accent' : undefined}
            onClick={() => setCurrentPage(i())}
          >
            {i() + 1}
          </Button>
        )}
      </For>
      <Show when={props.showLastButton}>
        <Button onClick={next}>&gt;</Button>
      </Show>
    </Stack>
  );
};
