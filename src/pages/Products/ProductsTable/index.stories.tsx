import { Meta, StoryObj } from 'storybook-solidjs';
import { ProductsTable } from '@pages';
import { Router as MemoryRouter, memoryIntegration } from '@solidjs/router';

const meta: Meta<typeof ProductsTable> = {
  title: 'Tables/ProductsTable',
  component: ProductsTable,
  decorators: [
    (Story) => (
      <MemoryRouter source={memoryIntegration()}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

type Story = StoryObj<typeof ProductsTable>;

export default meta;

export const Overview: Story = {};
