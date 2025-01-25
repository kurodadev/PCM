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
  Construction as ConstructionIcon,
  Settings as SettingsIcon,
  PlayCircleOutline as InProgressIcon,
  Info as InfoIcon,
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
        {/* Coluna Esquerda - Cards de Métricas */}
        <Grid item xs={12} md={7}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <MetricCard
                title="MTBF"
                value="120h"
                icon={<TimerIcon />}
                subtitle="Tempo médio entre falhas"
                info="Mean Time Between Failures - Média de tempo entre falhas dos equipamentos"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <MetricCard
                title="OS Sem Conclusão"
                value="42"
                icon={<PendingIcon />}
                subtitle="Total de ordens abertas"
                info="Número total de ordens de serviço que ainda não foram concluídas"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <MetricCard
                title="Preditivas"
                value="15"
                icon={<TimelineIcon />}
                subtitle="Manutenções preditivas"
                info="Número de manutenções preditivas programadas para o mês"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <MetricCard
                title="Corretivas"
                value="28"
                icon={<ConstructionIcon />}
                subtitle="Manutenções corretivas"
                info="Número de manutenções corretivas realizadas no mês"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <MetricCard
                title="Preventivas"
                value="35"
                icon={<SettingsIcon />}
                subtitle="Manutenções preventivas"
                info="Número de manutenções preventivas programadas para o mês"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <MetricCard
                title="Em Andamento"
                value="12"
                icon={<InProgressIcon />}
                subtitle="OS em execução"
                info="Número de ordens de serviço atualmente em execução"
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Coluna Direita - Gráfico de Custos */}
        <Grid item xs={12} md={5}>
          <CostByEquipmentChart />
        </Grid>
      </Grid>
    </Box>
  );
};
