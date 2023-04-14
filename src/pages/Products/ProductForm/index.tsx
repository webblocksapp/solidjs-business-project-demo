import { Component, createEffect } from 'solid-js';
import { Button, Grid, Stack, TextField, Typography } from '@components';
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
    back();
  };

  const back = () => {
    id ? navigate('../../') : navigate('../');
  };

  createEffect(() => {
    product() && formHandler.fillForm(product()!);
  });

  createEffect(() => {
    id && product() === undefined && productModel.read(id);
  });

  return (
    <>
      {productState().reading ? (
        <Typography>Loading...</Typography>
      ) : (
        <form onSubmit={submit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField formHandler={formHandler} name="name" label="Name" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField formHandler={formHandler} name="brand" label="Brand" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField formHandler={formHandler} name="price" label="Price" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField formHandler={formHandler} name="currency" disabled label="Currency" />
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" spacing={2}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={formHandler.isFormInvalid() || productState().updating}
                >
                  Submit
                </Button>
                <Button onClick={back} variant="contained" color="secondary">
                  Cancel
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </form>
      )}
    </>
  );
};
