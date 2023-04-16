import { Product, Pagination } from '@interfaces';

export type ProductState = {
  products: Product[];
  pagination: Pagination;
  listing: boolean;
  saving: boolean;
  removing: boolean;
  reading: boolean;
  listError: string;
  saveError: string;
  removeError: string;
  readError: string;
};
