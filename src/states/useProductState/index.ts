import { Id, Pagination, Product, ProductState } from '@interfaces';
import { createStore, reconcile } from 'solid-js/store';

const initialState: ProductState = {
  products: [],
  pagination: { count: 0, limit: 10, page: 1 },
  listing: false,
  saving: false,
  removing: false,
  reading: false,
  listError: '',
  saveError: '',
  removeError: '',
  readError: '',
};

const [store, setStore] = createStore(initialState);

export const useProductState = () => {
  const list = (payload: { data: Product[]; pagination: Pagination }) => {
    setStore('products', payload.data);
    setStore('pagination', payload.pagination);
    setStore('listError', '');
  };

  const listing = (flag: boolean) => {
    setStore('listing', flag);
  };

  const create = (product: Product) => {
    setStore('products', (products) => [product, ...products]);
    setStore('saveError', '');
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
    setStore('saveError', '');
  };

  const remove = (id: Id) => {
    setStore('products', (products) => products.filter((item) => item.id !== id));
    setStore('pagination', (pagination) => ({ ...pagination, count: pagination.count - 1 }));
    setStore('removeError', '');
  };

  const removing = (flag: boolean) => {
    setStore('removing', flag);
  };

  const read = (product: Product) => {
    setStore('products', (products) => [product, ...products]);
    setStore('readError', '');
  };

  const reading = (flag: boolean) => {
    setStore('reading', flag);
  };

  const saving = (flag: boolean) => {
    setStore('saving', flag);
  };

  const errors = (
    errors: Partial<{
      listError: string;
      removeError: string;
      readError: string;
      saveError: string;
    }>
  ) => {
    setStore(errors);
  };

  const resetStore = () => {
    setStore(reconcile(initialState));
  };

  return {
    store,
    resetStore,
    list,
    listing,
    create,
    update,
    read,
    reading,
    remove,
    removing,
    saving,
    errors,
  };
};
