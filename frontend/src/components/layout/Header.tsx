import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Avatar,
  Badge,
  Stack,
  useMediaQuery,
} from '@mui/material';
import {
  NotificationsActive,
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { useAuth } from '../../contexts/AuthContext';
import { UserMenu } from './UserMenu';
import { useAppTheme } from '../../contexts/ThemeContext';

interface HeaderProps {
  onToggleTheme: () => void;
  isDarkMode: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onToggleTheme, isDarkMode }) => {
  const { user } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { theme } = useAppTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        zIndex: theme.zIndex.drawer + 1,
        bgcolor: theme.palette.primary.main,
      }}
    >
      <Toolbar>
        {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Box
          component="img"
          src="/logo.svg"
          alt="PCM Logo"
          sx={{
            height: 40,
            width: 'auto',
            mr: 2,
            filter: isDarkMode ? 'brightness(1)' : 'none',
          }}
        />

        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1,
            color: theme.palette.primary.contrastText,
          }}
        >
          Sistema PCM
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <NotificationsActive />
            </Badge>
          </IconButton>

          <IconButton 
            onClick={handleOpenUserMenu} 
            sx={{ 
              p: 0,
              ml: 1,
              border: `2px solid ${theme.palette.primary.contrastText}`,
            }}
          >
            <Avatar 
              alt={user?.name || 'User'} 
              src={user?.avatar}
              sx={{ 
                width: 32, 
                height: 32,
                bgcolor: theme.palette.secondary.main,
              }}
            >
              {user?.name?.charAt(0) || 'U'}
            </Avatar>
          </IconButton>

          <IconButton 
            onClick={onToggleTheme} 
            color="inherit"
            sx={{ ml: 1 }}
          >
            {isDarkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Stack>

        <UserMenu
          anchorEl={anchorEl}
          onClose={handleCloseUserMenu}
        />
      </Toolbar>
    </AppBar>
  );
};
