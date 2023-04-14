import { useProductApiClient } from '@apiClients';
import { EntityParams, Id, Product } from '@interfaces';
import { useProductState } from '@states';
import { handleError } from '@utils';

export const useProductModel = () => {
  const productApiClient = useProductApiClient();
  const productState = useProductState();

  const list = async (params?: EntityParams<Product>) => {
    try {
      productState.listing(true);
      productState.list(await productApiClient.list(params));
    } catch (error) {
      productState.errors({ listError: handleError(error) });
    } finally {
      productState.listing(false);
    }
  };

  const create = async (data: Product) => {
    try {
      productState.creating(true);
      productState.create(await productApiClient.create(data));
    } catch (error) {
      productState.errors({ createError: handleError(error) });
    } finally {
      productState.creating(false);
    }
  };

  const update = async (id: Id, data: Product) => {
    try {
      productState.updating(true);
      productState.update(id, await productApiClient.update(id, data));
    } catch (error) {
      productState.errors({ updateError: handleError(error) });
    } finally {
      productState.updating(false);
    }
  };

  const save = (data: Product) => {
    if (data.id === undefined) {
      return create(data);
    } else {
      return update(data.id, data);
    }
  };

  const remove = async (id: Id) => {
    try {
      productState.removing(true);
      productState.remove(id);
    } catch (error) {
      productState.errors({ removeError: handleError(error) });
    } finally {
      productState.removing(false);
    }
  };

  const read = async (id: Id) => {
    try {
      productState.reading(true);
      productState.read(await productApiClient.read(id));
    } catch (error) {
      productState.errors({ readError: handleError(error) });
    } finally {
      productState.reading(false);
    }
  };

  const selectProductState = () => {
    return () => productState.store;
  };
  const selectProduct = (id: Id) => {
    return () => productState.store.products.find((item) => item.id == id);
  };

  return { list, create, update, remove, read, save, selectProductState, selectProduct };
};
