import { AnySchema } from 'yup';
import { useFormHandler as baseUseFormHandler, FormHandlerOptions } from 'solid-form-handler';
import { yupSchema } from 'solid-form-handler/yup';

export const useFormHandler = <T>(schema: AnySchema<T>, options?: FormHandlerOptions) => {
  const { validateForm: baseValidateForm, ...rest } = baseUseFormHandler<T>(
    yupSchema(schema),
    options
  );

  const validateForm: typeof baseValidateForm = (options) => {
    options = { throwException: false, ...options };
    return baseValidateForm(options);
  };

  return { validateForm, ...rest };
};
