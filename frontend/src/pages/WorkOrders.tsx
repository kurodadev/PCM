import React from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const mockData = [
  {
    id: 1,
    number: 'OS001',
    equipment: 'Torno CNC',
    openedAt: '2025-01-18',
    priority: 'Alta',
    status: 'Em Andamento',
  },
  {
    id: 2,
    number: 'OS002',
    equipment: 'Fresadora',
    openedAt: '2025-01-17',
    priority: 'Média',
    status: 'Aguardando Peças',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Em Andamento':
      return 'primary';
    case 'Aguardando Peças':
      return 'warning';
    case 'Concluído':
      return 'success';
    default:
      return 'default';
  }
};

const WorkOrders = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h4">Ordens de Serviço</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/ordens-servico/nova')}
        >
          Nova OS
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Número</TableCell>
              <TableCell>Equipamento</TableCell>
              <TableCell>Data de Abertura</TableCell>
              <TableCell>Prioridade</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.number}</TableCell>
                <TableCell>{row.equipment}</TableCell>
                <TableCell>{row.openedAt}</TableCell>
                <TableCell>
                  <Chip
                    label={row.priority}
                    color={row.priority === 'Alta' ? 'error' : 'warning'}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={getStatusColor(row.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Button size="small" color="primary">
                    Editar
                  </Button>
                  <Button size="small" color="secondary">
                    Detalhes
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default WorkOrders;
