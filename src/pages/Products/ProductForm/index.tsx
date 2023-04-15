import { Component, createEffect } from 'solid-js';
import { Button, Grid, GridItem, Skeleton, Stack, TextField, Typography } from '@components';
import { schema } from './schema';
import { useNavigate, useParams } from '@solidjs/router';
import { useProductModel } from '@models';
import { useFormHandler } from '@utils';

export const ProductForm: Component = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const productModel = useProductModel();
  const productState = productModel.selectProductState();
  const product = productModel.selectProduct(id);
  const formHandler = useFormHandler(schema);

  const submit = async (event: Event) => {
    event.preventDefault();
    await productModel.save(formHandler.formData());
    if (productState().error) return;
    back();
  };

  const back = () => {
    id ? navigate('../../') : navigate('../');
  };

  createEffect(() => {
    product() && formHandler.fillForm(product()!);
  });

  createEffect(() => {
    id && !Boolean(product()) && productModel.read(id);
  });

  return (
    <form onSubmit={submit}>
      <Skeleton loading={!Boolean(product()) && productState().loading}>
        <Grid templateColumns={{ '@sm': '1fr', '@md': '1fr 1fr' }} gap={17}>
          <GridItem>
            <TextField formHandler={formHandler} name="name" placeholder="Name" />
          </GridItem>
          <GridItem>
            <TextField formHandler={formHandler} name="brand" placeholder="Brand" />
          </GridItem>
          <GridItem>
            <TextField formHandler={formHandler} name="price" placeholder="Price" />
          </GridItem>
          <GridItem>
            <TextField formHandler={formHandler} name="currency" disabled placeholder="Currency" />
          </GridItem>
          <GridItem>
            <Stack spacing={10}>
              <Button
                type="submit"
                variant="solid"
                disabled={formHandler.isFormInvalid() || productState().loading}
              >
                Submit
              </Button>
              <Button onClick={back} variant="solid" color="secondary">
                Cancel
              </Button>
            </Stack>
          </GridItem>
        </Grid>
      </Skeleton>
    </form>
  );
};
