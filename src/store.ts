import * as states from '@states';

export const resetStores = () => {
  for (let value of Object.values(states)) {
    value().resetStore();
  }
};
