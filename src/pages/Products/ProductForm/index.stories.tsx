import { Meta, StoryObj } from 'storybook-solidjs';
import { ProductForm } from '@pages';
import { fireEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { sleep } from '@utils';
import { Router as MemoryRouter, memoryIntegration, Route, Routes } from '@solidjs/router';
import { Redirect } from '@components';

const meta: Meta<typeof ProductForm> = {
  title: 'Forms/ProductForm',
  component: ProductForm,
};

type Story = StoryObj<typeof ProductForm>;

export default meta;

export const FillProductForm: Story = {
  decorators: [
    (Story) => (
      <>
        <MemoryRouter source={memoryIntegration()}>
          <Routes>
            <Route path="/products/create" element={<Story />} />
          </Routes>
          <Redirect href="/products/create" />
        </MemoryRouter>
      </>
    ),
  ],
  name: 'Form data is valid with user input',
  play: async ({ canvasElement }) => {
    await sleep(100);

    const nameInput = canvasElement.querySelector('[name="name"]')!;
    const brandInput = canvasElement.querySelector('[name="brand"]')!;
    const priceInput = canvasElement.querySelector('[name="price"]')!;
    const submitBtn = canvasElement.querySelector<HTMLButtonElement>('button[type="submit"]')!;

    fireEvent.input(nameInput, { target: { value: 'Shoes' } });
    fireEvent.input(brandInput, { target: { value: 'Nike' } });
    fireEvent.input(priceInput, { target: { value: '2000' } });

    await sleep(100);

    expect(submitBtn.disabled).toBe(false);
  },
};

export const FetchProductFormData: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter source={memoryIntegration()}>
        <Routes>
          <Route path="/products/update/:id" element={<Story />} />
        </Routes>
        <Redirect href="/products/update/d07faa22-ecdb-48e1-b1d5-5fda6de9440c" />
      </MemoryRouter>
    ),
  ],
  name: 'Fetched form data is valid by using the product id',
  play: async ({ canvasElement }) => {
    await sleep(100);
    const submitBtn = canvasElement.querySelector<HTMLButtonElement>('button[type="submit"]')!;
    expect(submitBtn.disabled).toBe(false);
  },
};
