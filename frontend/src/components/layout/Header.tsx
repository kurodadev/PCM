import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Avatar,
  Badge,
  Stack,
} from '@mui/material';
import { NotificationsActive } from '@mui/icons-material';
import { useAuth } from '../../contexts/AuthContext';

export const Header = () => {
  const { user } = useAuth();

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: '#1a237e', // Tom mais escuro de azul
      }}
    >
      <Toolbar>
        {/* Logo área */}
        <Box sx={{ width: 200, mr: 3 }}>
          <Typography variant="h6" noWrap component="div" sx={{ color: '#fff' }}>
            RESIPLAC
          </Typography>
        </Box>

        {/* Área central - pode ser usada para título da página ou outros elementos */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Área direita com notificações e perfil */}
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton color="inherit">
            <Badge badgeContent={3} color="error">
              <NotificationsActive />
            </Badge>
          </IconButton>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" sx={{ color: '#fff' }}>
              {user?.name || 'Usuário'}
            </Typography>
            <Avatar
              alt={user?.name || 'User Avatar'}
              src="/path-to-avatar.jpg" // Adicione o caminho para a foto do usuário
              sx={{ width: 40, height: 40 }}
            />
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
