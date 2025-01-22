import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { Header } from './Header';
import { SubMenu } from './SubMenu';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Header />
      
      {/* Espaço para o header fixo */}
      <Box sx={{ height: '64px' }} />
      
      {/* SubMenu */}
      <SubMenu />
      
      {/* Conteúdo principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: '#f5f5f5',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
