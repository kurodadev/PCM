import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Chip,
  Typography,
} from '@mui/material';

const mockData = [
  {
    id: 1,
    number: 'OS001',
    equipment: 'Torno CNC',
    status: 'Em Andamento',
    priority: 'Alta',
    openedAt: '18/01/2025',
  },
  {
    id: 2,
    number: 'OS002',
    equipment: 'Fresadora',
    status: 'Aguardando Peças',
    priority: 'Média',
    openedAt: '17/01/2025',
  },
  {
    id: 3,
    number: 'OS003',
    equipment: 'Prensa',
    status: 'Em Aberto',
    priority: 'Baixa',
    openedAt: '16/01/2025',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Em Andamento':
      return 'primary';
    case 'Aguardando Peças':
      return 'warning';
    case 'Em Aberto':
      return 'error';
    default:
      return 'default';
  }
};

export const RecentWorkOrders = () => {
  return (
    <List>
      {mockData.map((order) => (
        <ListItem key={order.id} divider>
          <ListItemText
            primary={
              <Typography variant="subtitle2">
                {order.number} - {order.equipment}
              </Typography>
            }
            secondary={`Aberto em: ${order.openedAt}`}
          />
          <ListItemSecondaryAction>
            <Chip
              label={order.status}
              color={getStatusColor(order.status)}
              size="small"
              sx={{ mr: 1 }}
            />
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};
