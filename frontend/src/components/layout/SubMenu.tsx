import React from 'react';
import {
  Box,
  Button,
  Stack,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Build as BuildIcon,
  Inventory as InventoryIcon,
  Assignment as AssignmentIcon,
  BarChart as BarChartIcon,
  Description as DescriptionIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppTheme } from '../../contexts/ThemeContext';

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Ordens de Serviço', icon: <BuildIcon />, path: '/ordens-servico' },
  { text: 'Solicitações', icon: <AssignmentIcon />, path: '/solicitacoes' },
  { text: 'Planos', icon: <DescriptionIcon />, path: '/planos' },
  { text: 'Inventário', icon: <InventoryIcon />, path: '/inventario' },
  { text: 'Métricas', icon: <BarChartIcon />, path: '/metricas' },
];

export const SubMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, isDarkMode } = useAppTheme();

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: isDarkMode ? 'background.paper' : 'grey.100',
        borderBottom: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'}`,
        py: 1,
        px: { xs: 1, sm: 2 },
        transition: 'background-color 0.3s',
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{
          overflowX: 'auto',
          '&::-webkit-scrollbar': {
            height: '6px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
            borderRadius: '3px',
            '&:hover': {
              backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)',
            },
          },
          pb: 1, // Espaço para a scrollbar
        }}
      >
        {menuItems.map((item) => (
          <Button
            key={item.text}
            startIcon={item.icon}
            onClick={() => navigate(item.path)}
            size="small"
            sx={{
              color: location.pathname === item.path 
                ? 'primary.main' 
                : isDarkMode ? 'text.secondary' : 'text.primary',
              backgroundColor: location.pathname === item.path 
                ? (isDarkMode ? 'rgba(144, 202, 249, 0.08)' : 'rgba(25, 118, 210, 0.08)')
                : 'transparent',
              '&:hover': {
                backgroundColor: isDarkMode 
                  ? 'rgba(144, 202, 249, 0.12)' 
                  : 'rgba(25, 118, 210, 0.12)',
              },
              whiteSpace: 'nowrap',
              px: 2,
              py: 1,
              minHeight: 40,
              borderRadius: 1,
              fontSize: { xs: '0.875rem', sm: '0.9rem' },
              textTransform: 'none',
              transition: 'all 0.2s',
            }}
          >
            {item.text}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};
