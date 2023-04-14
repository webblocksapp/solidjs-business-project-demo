import { AnySchema } from 'yup';
import { useFormHandler as baseUseFormHandler, FormHandlerOptions } from 'solid-form-handler';
import { yupSchema } from 'solid-form-handler/yup';

export const useFormHandler = <T>(schema: AnySchema<T>, options?: FormHandlerOptions) => {
  return baseUseFormHandler<T>(yupSchema(schema), options);
};
