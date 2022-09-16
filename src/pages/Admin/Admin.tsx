import DashboardPage from './Dashboard';
import { Box, createTheme } from '@mui/material';
import React from 'react';
import { ThemeProvider } from 'react-bootstrap';
import SideBar from '../../components/Sidebar';
import {
    createHashRouter,
    RouterProvider,
  } from 'react-router-dom';


const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1080,
      lg: 1200,
      xl: 1536,
    },
  },
});

const Router = createHashRouter([
    {
      path: '/admin',

      children: [
        {
          path: 'dashboard',
          element: <DashboardPage />,
        },
      ],
    },
  ]);

const Admin = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          paddingLeft: {
            sx: '2px',
          },
        }}
      >
        <SideBar />
        <Box component="main" sx={{ p: 3 }} width={'100%'}>
          <Router/>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Admin;
