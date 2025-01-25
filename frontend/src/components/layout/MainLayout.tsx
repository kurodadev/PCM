import React from 'react';
import { Box } from '@mui/material';
import { Header } from './Header';
import { SubMenu } from './SubMenu';
import { useAppTheme } from '../../contexts/ThemeContext';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { isDarkMode, toggleTheme, theme } = useAppTheme();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header onToggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: theme.palette.background.default,
          mt: 8, // Espaço para o AppBar
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <SubMenu />
        <Box
          sx={{
            p: 3,
            flexGrow: 1,
            width: '100%',
            bgcolor: theme.palette.background.default,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
