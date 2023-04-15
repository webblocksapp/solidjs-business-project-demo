import { Product, Pagination } from '@interfaces';

export type ProductState = {
  products: Product[];
  pagination: Pagination;
  loading: boolean;
  error: string;
};
