import { useProductModel } from '@models';
import { data } from '@mocks/data';

describe('useProductModel', () => {
  const productModel = useProductModel();
  const firstRecord = data.products[0];
  const testData = {
    brand: 'Nike',
    currency: 'EUR',
    name: 'Skirt',
    price: 19.99,
  };

  it('LIST', async () => {
    await productModel.list();
    const state = productModel.selectProductState();
    expect(state().products[0]).toMatchObject(firstRecord);
  });

  it('CREATE', async () => {
    await productModel.save(testData);
    const state = productModel.selectProductState();
    expect(state().products[0]).toMatchObject(testData);
  });

  it('UPDATE', async () => {
    await productModel.list();
    await productModel.save({ id: firstRecord.id, ...testData });
    const state = productModel.selectProductState();
    expect(state().products[0]).toMatchObject(testData);
  });

  it('REMOVE', async () => {
    await productModel.list();
    await productModel.remove(firstRecord.id!);
    const state = productModel.selectProductState();
    expect(state().products[0].id).not.toBe(firstRecord.id);
  });

  it('READ', async () => {
    await productModel.read(firstRecord.id!);
    const state = productModel.selectProductState();
    expect(state().products[0]).toMatchObject(firstRecord);
  });
});
