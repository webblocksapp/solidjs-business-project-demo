import { Redirect } from '@components';
import { Error404, ProductForm, Products, ProductsTable } from '@pages';
import { RouteDefinition } from '@solidjs/router';
import { MainLayout } from 'src/layouts/MainLayout';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Redirect,
        data: () => ({
          href: 'products',
        }),
      },
      {
        path: 'products',
        component: Products,
        children: [
          {
            path: '',
            component: ProductsTable,
          },
          {
            path: 'update/:id',
            component: ProductForm,
          },
          {
            path: 'create',
            component: ProductForm,
          },
        ],
      },
      {
        path: '404',
        component: Error404,
      },
    ],
  },
];
