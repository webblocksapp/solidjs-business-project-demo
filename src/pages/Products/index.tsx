import { Component } from 'solid-js';
import { Breadcrumb, Grid, GridItem, Typography } from '@components';
import { Outlet } from '@solidjs/router';

export const Products: Component = () => {
  return (
    <Grid>
      <GridItem>
        <Breadcrumb>
          <Typography>Products</Typography>
        </Breadcrumb>
      </GridItem>
      <GridItem>
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export * from './ProductForm';
export * from './ProductsTable';
