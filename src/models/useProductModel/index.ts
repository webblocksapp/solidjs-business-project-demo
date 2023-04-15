import { useProductApiClient } from '@apiClients';
import { EntityParams, Id, Product } from '@interfaces';
import { useProductState } from '@states';
import { handleError } from '@utils';

export const useProductModel = () => {
  const productApiClient = useProductApiClient();
  const productState = useProductState();

  const list = async (params?: EntityParams<Product>) => {
    try {
      productState.loading(true);
      productState.list(await productApiClient.list(params));
    } catch (error) {
      productState.error(handleError(error));
    } finally {
      productState.loading(false);
    }
  };

  const create = async (data: Product) => {
    try {
      productState.loading(true);
      productState.create(await productApiClient.create(data));
    } catch (error) {
      productState.error(handleError(error));
    } finally {
      productState.loading(false);
    }
  };

  const update = async (id: Id, data: Product) => {
    try {
      productState.loading(true);
      productState.update(id, await productApiClient.update(id, data));
    } catch (error) {
      productState.error(handleError(error));
    } finally {
      productState.loading(false);
    }
  };

  const save = (data: Product) => {
    if (data.id) {
      return update(data.id, data);
    } else {
      return create(data);
    }
  };

  const remove = async (id: Id) => {
    try {
      productState.loading(true);
      productState.remove(id);
    } catch (error) {
      productState.error(handleError(error));
    } finally {
      productState.loading(false);
    }
  };

  const read = async (id: Id) => {
    try {
      productState.loading(true);
      productState.read(await productApiClient.read(id));
    } catch (error) {
      productState.error(handleError(error));
    } finally {
      productState.loading(false);
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
