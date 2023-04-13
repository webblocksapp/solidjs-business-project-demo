import { useProductApiClient } from '@apiClients';
import { data } from '@mocks/data';

describe('useProductApiClient', () => {
  const productApiClient = useProductApiClient();
  const firstRecord = data.products[0];
  const testData = {
    brand: 'Nike',
    currency: 'EUR',
    name: 'Skirt',
    price: 19.99,
  };

  it('LIST', async () => {
    const response = await productApiClient.list();
    expect(response.data[0]).toMatchObject(firstRecord);
  });

  it('CREATE', async () => {
    const data = await productApiClient.create(testData);
    expect(data).toMatchObject(testData);
  });

  it('UPDATE', async () => {
    const data = await productApiClient.update(firstRecord.id!, testData);
    expect(data).toMatchObject(testData);
  });

  it('REMOVE', async () => {
    const data = await productApiClient.remove(firstRecord.id!);
    expect(data).toMatchObject(firstRecord);
  });

  it('READ', async () => {
    const data = await productApiClient.read(firstRecord.id!);
    expect(data).toMatchObject(firstRecord);
  });
});
