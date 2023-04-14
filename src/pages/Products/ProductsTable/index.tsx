import { Component, createEffect } from 'solid-js';
import { Alert, Button, DataTable, Grid, GridItem, IconButton, Stack } from '@components';
import { useProductModel } from '@models';
import { Product } from '@interfaces';
import { useNavigate } from '@solidjs/router';

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
      {productState().listError && (
        <GridItem>
          <Alert status="danger">{productState().listError}</Alert>
        </GridItem>
      )}
      <GridItem>
        <DataTable
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
                <>
                  <IconButton icon={<>Edit</>} aria-label="Edit" onClick={() => navigate(`update/${row.id}`)} />
                  <IconButton icon={<>Delete</>} aria-label="Delete" onClick={() => productModel.remove(row.id!)}>
                    Delete
                  </IconButton>
                </>
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
