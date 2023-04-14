import { Preview } from 'storybook-solidjs';
import { initialize, mswDecorator, getWorker } from 'msw-storybook-addon';
import { buildStore } from '@store';
import * as handlers from '@mocks/handlers';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
