import { Box, Content, Header, Sidebar, SidebarMenu, Typography } from '@components';
import { Outlet } from '@solidjs/router';
import { MAIN_SIDEBAR_MENU } from '@constants';
import { Component } from 'solid-js';

export const MainLayout: Component = () => {
  return (
    <Box display="grid" gridTemplateRows="auto 1fr">
      <Header brand={<Typography>Admin</Typography>} />
      <Box display="grid" gridTemplateColumns="1fr">
        {/* <Sidebar>
          <SidebarMenu items={MAIN_SIDEBAR_MENU} />
        </Sidebar> */}
        <Content>
          <Outlet />
        </Content>
      </Box>
    </Box>
  );
};
