import { Component, mergeProps } from 'solid-js';
import { Box, BoxProps } from '@components';

export interface ContentProps extends BoxProps {}

export const Content: Component<ContentProps> = (props) => {
  props = mergeProps({ padding: '$2' }, props);
  return <Box {...props} />;
};
