import { Component, mergeProps, splitProps } from 'solid-js';
import { Field, FieldProps } from 'solid-form-handler';
import { Input as HuiTextField, InputProps as HuiTextFieldProps } from '@hope-ui/solid';

export type TextFieldProps = HuiTextFieldProps & FieldProps;

export const TextField: Component<TextFieldProps> = (props) => {
  props = mergeProps({ fullWidth: true }, props);
  const [_, rest] = splitProps(props, ['triggers', 'formHandler', 'onChange', 'onBlur']);
  return (
    <Field
      {...props}
      mode="input"
      render={(field) => (
        <HuiTextField
          {...rest}
          invalid={field.helpers.error}
          onChange={(event) => {
            field.helpers.onValueChange(event.currentTarget.value);
          }}
          onBlur={() => {
            field.helpers.onFieldBlur();
          }}
          value={field.props.value}
        />
      )}
    />
  );
};
