import { Preview } from 'storybook-solidjs';
import { initialize, mswDecorator, getWorker } from 'msw-storybook-addon';
import { Component, JSXElement, onCleanup } from 'solid-js';
import { resetStores } from '@store';
import { HopeProvider } from '@hope-ui/solid';
import * as handlers from '@mocks/handlers';

initialize({ onUnhandledRequest: 'bypass' });

const RefreshProvider: Component<{ children: JSXElement }> = (props) => {
  onCleanup(() => {
    getWorker().resetHandlers();
    resetStores();
  });

  return <>{props.children}</>;
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    msw: {
      handlers,
    },
  },
  decorators: [
    mswDecorator,
    (Story) => (
      <HopeProvider>
        <RefreshProvider>
          <Story />
        </RefreshProvider>
      </HopeProvider>
    ),
  ],
};

export default preview;
