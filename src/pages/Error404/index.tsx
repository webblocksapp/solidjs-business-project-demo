import { Component } from 'solid-js';
import { Box, Typography } from '@components';

export const Error404: Component = () => {
  return (
    <Box displayRaw="flex" alignItems="center" justifyContent="center" flexDirection="column" height="100%">
      <Typography variant="h1">404</Typography>
      <Typography variant="h4">Not Found</Typography>
    </Box>
  );
};
