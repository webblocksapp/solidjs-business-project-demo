import { Component, JSXElement } from 'solid-js';
import { AppBar, Box, Toolbar } from '@components';

export interface HeaderProps {
  brand?: JSXElement;
}

export const Header: Component<HeaderProps> = (props) => {
  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>{props.brand}</Toolbar>
      </AppBar>
    </Box>
  );
};
