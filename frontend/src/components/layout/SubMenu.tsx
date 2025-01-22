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

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderBottom: '1px solid #e0e0e0',
        py: 1,
        px: 2,
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
            backgroundColor: '#f5f5f5',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            borderRadius: '3px',
          },
        }}
      >
        {menuItems.map((item) => (
          <Button
            key={item.text}
            startIcon={item.icon}
            onClick={() => navigate(item.path)}
            sx={{
              color: location.pathname === item.path ? 'primary.main' : 'text.secondary',
              backgroundColor: location.pathname === item.path ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(25, 118, 210, 0.12)',
              },
              whiteSpace: 'nowrap',
            }}
          >
            {item.text}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};
