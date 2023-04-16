import { Component, createEffect } from 'solid-js';
import { Button, DataTable, Grid, GridItem, IconButton, Stack } from '@components';
import { useProductModel } from '@models';
import { Product } from '@interfaces';
import { useNavigate } from '@solidjs/router';
import { FiEdit2, FiTrash2 } from 'solid-icons/fi';

export const ProductsTable: Component = () => {
  const productModel = useProductModel();
  const productState = productModel.selectProductState();
  const navigate = useNavigate();

  createEffect(() => {
    !productState().pagination.count && productModel.list();
  });

  return (
    <Grid>
      <GridItem>
        <Stack direction="row" justifyContent="flex-end">
          <Button variant="solid" color="primary" onClick={() => navigate('create')}>
            Create
          </Button>
        </Stack>
      </GridItem>
      <GridItem>
        <DataTable
          error={productState().listError}
          loading={productState().listing}
          data={productState().products}
          columns={[
            { path: 'id', label: 'Id' },
            { path: 'name', label: 'Name' },
            { path: 'price', label: 'Price' },
            { path: 'currency', label: 'Currency' },
            {
              label: 'Actions',
              cellTemplate: (row: Product) => (
                <Stack spacing={10}>
                  <IconButton
                    icon={<FiEdit2 />}
                    aria-label="Edit"
                    onClick={() => navigate(`update/${row.id}`)}
                  />
                  <IconButton
                    icon={<FiTrash2 />}
                    aria-label="Delete"
                    onClick={() => productModel.remove(row.id!)}
                  >
                    Delete
                  </IconButton>
                </Stack>
              ),
            },
          ]}
          pagination={productState().pagination}
          onPageChange={(page) => productModel.list({ _page: page })}
          onRowsPerPageChange={(limit) => productModel.list({ _limit: limit, _page: 1 })}
        />
      </GridItem>
    </Grid>
  );
};
