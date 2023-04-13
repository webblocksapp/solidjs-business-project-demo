import { Meta, StoryObj } from 'storybook-solidjs';
import { Alert } from '@components';

const meta: Meta<typeof Alert> = {
  title: 'Alert',
  component: Alert,
  argTypes: {
    severity: {
      options: ['error', 'warning', 'info', 'success'],
      control: 'select',
    },
  },
};

type Story = StoryObj<typeof Alert>;
export default meta;

export const Primary: Story = {
  args: { severity: 'info', children: 'This is an alert — check it out!' },
};
