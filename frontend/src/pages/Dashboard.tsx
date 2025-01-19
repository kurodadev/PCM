import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { KPICard } from '../components/dashboard/KPICard';
import { WorkOrderChart } from '../components/dashboard/WorkOrderChart';
import { RecentWorkOrders } from '../components/dashboard/RecentWorkOrders';
import {
  Build as BuildIcon,
  Assignment as AssignmentIcon,
  Timeline as TimelineIcon,
  Speed as SpeedIcon,
  Add as AddIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const navigate = useNavigate();

  const handleNewWorkOrder = () => {
    navigate('/ordens-servico/nova');
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h4" component="h1">
          Dashboard
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleNewWorkOrder}
        >
          Nova Ordem de Serviço
        </Button>
      </Box>

      {/* KPIs */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <KPICard
            title="Equipamentos Ativos"
            value={42}
            icon={<BuildIcon />}
            color="#2196f3"
            trend={{ value: 5, isPositive: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <KPICard
            title="OS em Aberto"
            value={15}
            icon={<AssignmentIcon />}
            color="#f44336"
            trend={{ value: 2, isPositive: false }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <KPICard
            title="MTBF (horas)"
            value="168.5"
            icon={<TimelineIcon />}
            color="#4caf50"
            trend={{ value: 8, isPositive: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <KPICard
            title="Disponibilidade"
            value="95.2%"
            icon={<SpeedIcon />}
            color="#ff9800"
            trend={{ value: 1.5, isPositive: true }}
          />
        </Grid>
      </Grid>

      {/* Charts and Tables */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              backgroundColor: 'background.paper',
              p: 3,
              borderRadius: 1,
              height: '100%',
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Ordens de Serviço por Status
            </Typography>
            <WorkOrderChart />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundColor: 'background.paper',
              p: 3,
              borderRadius: 1,
              height: '100%',
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              OS Recentes
            </Typography>
            <RecentWorkOrders />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
