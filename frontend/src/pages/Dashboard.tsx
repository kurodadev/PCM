import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Alert,
} from '@mui/material';
import {
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  Schedule as ScheduleIcon,
  Error as ErrorIcon,
} from '@mui/icons-material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Dados mockados para exemplo
const mockData = {
  osAbertas: 25,
  osProgramadas: 15,
  osCriticas: 3,
  osRecentes: [
    { id: 1, numero: "OS-2025-001", equipamento: "Máquina 01", tipo: "Preventiva", status: "Em Andamento", prioridade: "Alta" },
    { id: 2, numero: "OS-2025-002", equipamento: "Máquina 02", tipo: "Corretiva", status: "Programada", prioridade: "Média" },
    { id: 3, numero: "OS-2025-003", equipamento: "Máquina 03", tipo: "Preditiva", status: "Crítica", prioridade: "Crítica" },
    { id: 4, numero: "OS-2025-004", equipamento: "Máquina 04", tipo: "Preventiva", status: "Em Espera", prioridade: "Baixa" },
  ],
  statusData: [
    { name: 'Em Andamento', value: 8 },
    { name: 'Programada', value: 15 },
    { name: 'Crítica', value: 3 },
    { name: 'Em Espera', value: 4 },
  ],
};

const StatusChip = ({ status, prioridade }: { status: string; prioridade: string }) => {
  let color: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning" = "default";
  let icon = null;

  switch (status) {
    case "Em Andamento":
      color = "primary";
      icon = <ScheduleIcon />;
      break;
    case "Programada":
      color = "info";
      icon = <CheckCircleIcon />;
      break;
    case "Crítica":
      color = "error";
      icon = <ErrorIcon />;
      break;
    case "Em Espera":
      color = "warning";
      icon = <WarningIcon />;
      break;
  }

  return <Chip icon={icon} label={status} color={color} size="small" />;
};

export const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      {/* KPIs */}
      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ p: 2, bgcolor: 'info.light' }}>
            <Typography variant="h6" color="info.contrastText">OS em Aberto</Typography>
            <Typography variant="h3" color="info.contrastText">{mockData.osAbertas}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ p: 2, bgcolor: 'success.light' }}>
            <Typography variant="h6" color="success.contrastText">OS Programadas</Typography>
            <Typography variant="h3" color="success.contrastText">{mockData.osProgramadas}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ p: 2, bgcolor: 'error.light' }}>
            <Typography variant="h6" color="error.contrastText">OS Críticas</Typography>
            <Typography variant="h3" color="error.contrastText">{mockData.osCriticas}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Status Geral</Typography>
            <Box sx={{ height: 100 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockData.statusData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Alertas para OS Críticas */}
      {mockData.osCriticas > 0 && (
        <Alert severity="error" sx={{ mb: 3 }}>
          Existem {mockData.osCriticas} Ordens de Serviço críticas que precisam de atenção imediata!
        </Alert>
      )}

      {/* Tabela de OS Recentes */}
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Typography variant="h6" sx={{ p: 2 }}>
          Ordens de Serviço Recentes
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Número</TableCell>
                <TableCell>Equipamento</TableCell>
                <TableCell>Tipo</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Prioridade</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockData.osRecentes.map((os) => (
                <TableRow key={os.id}>
                  <TableCell>{os.numero}</TableCell>
                  <TableCell>{os.equipamento}</TableCell>
                  <TableCell>{os.tipo}</TableCell>
                  <TableCell>
                    <StatusChip status={os.status} prioridade={os.prioridade} />
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={os.prioridade}
                      color={os.prioridade === "Crítica" ? "error" : os.prioridade === "Alta" ? "warning" : "default"}
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};
