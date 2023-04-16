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

  const save = async (data: Product) => {
    try {
      productState.saving(true);
      if (data.id) {
        productState.update(data.id, await productApiClient.update(data.id, data));
      } else {
        productState.create(await productApiClient.create(data));
      }
    } catch (error) {
      productState.errors({ saveError: handleError(error) });
    } finally {
      productState.saving(false);
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

  return { list, remove, read, save, selectProductState, selectProduct };
};
