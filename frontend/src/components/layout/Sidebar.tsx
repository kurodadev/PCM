import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
  Collapse,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Build as BuildIcon,
  Inventory as InventoryIcon,
  Timeline as TimelineIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  Error as ErrorIcon,
  AccessTime as TimeIcon,
  AttachMoney as MoneyIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [metricasOpen, setMetricasOpen] = useState(false);

  const handleMetricasClick = () => {
    setMetricasOpen(!metricasOpen);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { text: 'Ordens de Serviço', icon: <BuildIcon />, path: '/ordens-servico' },
    { text: 'Inventário', icon: <InventoryIcon />, path: '/inventario' },
  ];

  const metricasItems = [
    { text: 'Falhas', icon: <ErrorIcon />, path: '/metricas/falhas' },
    { text: 'Tempo', icon: <TimeIcon />, path: '/metricas/tempo' },
    { text: 'Custos', icon: <MoneyIcon />, path: '/metricas/custos' },
  ];

  return (
    <div>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Menu
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => navigate(item.path)}
            selected={location.pathname === item.path}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        
        <ListItem button onClick={handleMetricasClick}>
          <ListItemIcon>
            <TimelineIcon />
          </ListItemIcon>
          <ListItemText primary="Métricas" />
          {metricasOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        
        <Collapse in={metricasOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {metricasItems.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => navigate(item.path)}
                selected={location.pathname === item.path}
                sx={{ pl: 4 }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    </div>
  );
};
