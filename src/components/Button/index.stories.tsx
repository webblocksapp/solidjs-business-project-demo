import { Meta, StoryObj } from 'storybook-solidjs';
import { Button } from '@components';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['text', 'contained', 'outlined'],
      control: 'select',
    },
  },
};

type Story = StoryObj<typeof Button>;
export default meta;

export const Primary: Story = {
  args: { color: 'primary', variant: 'contained', children: 'Text' },
};
