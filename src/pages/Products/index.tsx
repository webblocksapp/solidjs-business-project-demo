import { Component } from 'solid-js';
import { Breadcrumbs, Grid, Typography } from '@components';
import { Outlet } from '@solidjs/router';

export const Products: Component = () => {
  return (
    <Grid container rowSpacing={2}>
      <Grid item xs={12}>
        <Breadcrumbs>
          <Typography>Products</Typography>
        </Breadcrumbs>
      </Grid>
      <Grid item xs={12}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export * from './ProductForm';
export * from './ProductsTable';
