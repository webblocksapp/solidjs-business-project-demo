import { Id, Pagination, Product, ProductState } from '@interfaces';
import { createStore, reconcile } from 'solid-js/store';

const initialState = (): ProductState => ({
  products: [],
  pagination: { count: 0, limit: 10, page: 1 },
  loading: false,
  error: '',
});

const [store, setStore] = createStore(initialState());

export const useProductState = () => {
  const list = (payload: { data: Product[]; pagination: Pagination }) => {
    setStore('products', payload.data);
    setStore('pagination', payload.pagination);
    setStore('error', '');
  };

  const create = (product: Product) => {
    setStore('products', (products) => [product, ...products]);
    setStore('error', '');
  };

  const update = (id: Id, product: Product) => {
    setStore('products', (products) =>
      products.map((item) => {
        if (item.id == id) {
          return { ...item, ...product };
        }

        return item;
      })
    );
    setStore('error', '');
  };

  const remove = (id: Id) => {
    setStore('products', (products) => products.filter((item) => item.id !== id));
    setStore('pagination', (pagination) => ({ ...pagination, count: pagination.count - 1 }));
    setStore('error', '');
  };

  const read = (product: Product) => {
    setStore('products', (products) => [product, ...products]);
    setStore('error', '');
  };

  const loading = (flag: boolean) => {
    setStore('loading', flag);
  };

  const error = (message: string) => {
    setStore('error', message);
  };

  const resetStore = () => {
    setStore(reconcile(initialState()));
  };

  return {
    store,
    resetStore,
    list,
    create,
    update,
    read,
    remove,
    loading,
    error,
  };
};
