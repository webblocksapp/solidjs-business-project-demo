import { server } from '@mocks/server';
import { resetStores } from '@store';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => {
  server.resetHandlers();
  resetStores();
});
afterAll(() => server.close());
