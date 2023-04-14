import { Meta, StoryObj } from 'storybook-solidjs';
import { TextField } from '@components';
import { useFormHandler } from '@utils';
import * as yup from 'yup';

const meta: Meta<typeof TextField> = {
  title: 'TextField',
  component: TextField,
};

type Story = StoryObj<typeof TextField>;
export default meta;

const schema = yup.object({
  name: yup.string().required(),
});

export const ValidatingTextInput: Story = {
  render: () => {
    const formHandler = useFormHandler(schema);
    return <TextField formHandler={formHandler} label="name" name="name" />;
  },
};
