import { Meta, StoryObj } from 'storybook-solidjs';
import { Pagination } from '@components';

const meta: Meta = {
  title: 'Pagination',
  component: Pagination,
};

export default meta;
export type Story = StoryObj<typeof Pagination>;

export const Overview: Story = {
  args: { count: 40, rowsPerPage: 10 },
};
