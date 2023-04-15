import { Component, JSXElement } from 'solid-js';
import { AppBar, Box, Toolbar, Typography } from '@components';

export interface HeaderProps {
  brand?: JSXElement;
}

export const Header: Component<HeaderProps> = (props) => {
  return (
    <Box padding="$2" boxShadow="$sm" bgColor="$background">
      <AppBar position="sticky">
        <Toolbar>
          <Typography size="3xl">{props.brand}</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
