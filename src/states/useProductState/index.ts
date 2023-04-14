import { Id, Pagination, Product, ProductState } from '@interfaces';
import { createStore, reconcile } from 'solid-js/store';

const initialState: ProductState = {
  products: [],
  pagination: { count: 0, limit: 10, page: 1 },
  listing: false,
  creating: false,
  updating: false,
  removing: false,
  reading: false,
  listError: '',
  createError: '',
  updateError: '',
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
    setStore('createError', '');
  };

  const creating = (flag: boolean) => {
    setStore('creating', flag);
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
    setStore('updateError', '');
  };

  const updating = (flag: boolean) => {
    setStore('updating', flag);
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

  const errors = (
    errors: Partial<{
      listError: string;
      createError: string;
      updateError: string;
      removeError: string;
      readError: string;
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
    creating,
    update,
    updating,
    read,
    reading,
    remove,
    removing,
    errors,
  };
};
