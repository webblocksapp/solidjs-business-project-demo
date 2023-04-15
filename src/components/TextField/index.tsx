import { Component, mergeProps, splitProps } from 'solid-js';
import { Field, FieldProps } from 'solid-form-handler';
import { Input as HuiTextField, InputProps as HuiTextFieldProps } from '@hope-ui/solid';
import { SkeletonBox, useSkeletonContext } from '@components';

export type TextFieldProps = HuiTextFieldProps & FieldProps;

export const TextField: Component<TextFieldProps> = (props) => {
  props = mergeProps({ fullWidth: true }, props);
  const [_, rest] = splitProps(props, ['triggers', 'formHandler', 'onChange', 'onBlur']);
  const { loaded } = useSkeletonContext();

  return (
    <Field
      {...props}
      mode="input"
      render={(field) => (
        <SkeletonBox loaded={loaded()}>
          <HuiTextField
            {...rest}
            invalid={field.helpers.error}
            onInput={(event) => {
              field.helpers.onValueChange(event.currentTarget.value);
            }}
            onBlur={() => {
              field.helpers.onFieldBlur();
            }}
            value={field.props.value}
          />
        </SkeletonBox>
      )}
    />
  );
};
