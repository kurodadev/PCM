import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  Build as BuildIcon,
  Assignment as AssignmentIcon,
  Timer as TimerIcon,
  Engineering as EngineeringIcon,
  PendingActions as PendingIcon,
  Timeline as TimelineIcon,
} from '@mui/icons-material';
import { useAppTheme } from '../contexts/ThemeContext';
import { CostByEquipmentChart } from '../components/charts/CostByEquipmentChart';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  progress?: number;
  subtitle?: string;
  info?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon, progress, subtitle, info }) => {
  const { isDarkMode } = useAppTheme();

  return (
    <Card
      sx={{
        height: '100%',
        backgroundColor: isDarkMode ? 'background.paper' : 'background.paper',
        boxShadow: isDarkMode 
          ? '0 4px 6px rgba(0, 0, 0, 0.3)' 
          : '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: isDarkMode 
            ? '0 6px 12px rgba(0, 0, 0, 0.4)' 
            : '0 4px 8px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 36,
              height: 36,
              borderRadius: '50%',
              backgroundColor: isDarkMode ? 'rgba(144, 202, 249, 0.2)' : 'primary.light',
              color: isDarkMode ? 'primary.light' : 'primary.dark',
              mr: 1.5,
            }}
          >
            {icon}
          </Box>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1,
              fontSize: '0.9rem',
              fontWeight: 500,
            }}
          >
            {title}
          </Typography>
          {info && (
            <Tooltip title={info}>
              <IconButton size="small">
                <InfoIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
        </Box>
        
        <Typography 
          variant="h4" 
          component="div"
          sx={{ 
            mb: 0.5,
            fontWeight: 600,
            color: isDarkMode ? 'primary.light' : 'primary.main',
            fontSize: '1.75rem',
          }}
        >
          {value}
        </Typography>
        
        {subtitle && (
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ 
              mb: 0.5,
              fontSize: '0.8rem',
            }}
          >
            {subtitle}
          </Typography>
        )}

        {progress !== undefined && (
          <Box sx={{ width: '100%', mt: 1.5 }}>
            <LinearProgress 
              variant="determinate" 
              value={progress} 
              sx={{
                height: 6,
                borderRadius: 3,
                backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 3,
                },
              }}
            />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export const Dashboard = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography 
        variant="h4" 
        component="h1" 
        sx={{ 
          mb: 4,
          fontWeight: 600,
        }}
      >
        Dashboard PCM
      </Typography>

      <Grid container spacing={3}>
        {/* Cards de Métricas */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <MetricCard
                title="Equipamentos"
                value="156"
                icon={<BuildIcon />}
                subtitle="Total de equipamentos"
                info="Número total de equipamentos cadastrados no sistema"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <MetricCard
                title="OS em Andamento"
                value="28"
                icon={<AssignmentIcon />}
                subtitle="Ordens de serviço ativas"
                info="Número de ordens de serviço em execução"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <MetricCard
                title="MTBF"
                value="120h"
                icon={<TimerIcon />}
                subtitle="Tempo médio entre falhas"
                info="Mean Time Between Failures - Média de tempo entre falhas dos equipamentos"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <MetricCard
                title="Técnicos Disponíveis"
                value="12"
                icon={<EngineeringIcon />}
                subtitle="Equipe técnica ativa"
                info="Número de técnicos disponíveis para manutenção"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <MetricCard
                title="Manutenções Pendentes"
                value="15"
                icon={<PendingIcon />}
                subtitle="Aguardando execução"
                info="Número de manutenções programadas aguardando execução"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <MetricCard
                title="Eficiência Geral"
                value="85%"
                icon={<TimelineIcon />}
                progress={85}
                subtitle="OEE do mês atual"
                info="Overall Equipment Effectiveness - Eficiência geral dos equipamentos"
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Gráfico de Custos */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Custos por Equipamento
              </Typography>
              <Box sx={{ height: 300 }}>
                <CostByEquipmentChart />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
