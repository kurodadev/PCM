import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Box, Typography, useTheme } from '@mui/material';
import { useAppTheme } from '../../contexts/ThemeContext';
import inventoryData from '../../data/inventory.json';

// Preparar dados para o gráfico
const data = inventoryData.equipment
  .filter(eq => eq.energyCostPerHour !== null)
  .sort((a, b) => (b.energyCostPerHour || 0) - (a.energyCostPerHour || 0))
  .slice(0, 10)
  .map(eq => ({
    name: eq.name,
    cost: eq.energyCostPerHour || 0
  }));

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          bgcolor: 'background.paper',
          p: 1.5,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
          boxShadow: 1,
        }}
      >
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="body2" color="primary">
          Custo: R$ {payload[0].value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}/h
        </Typography>
      </Box>
    );
  }
  return null;
};

export const CostByEquipmentChart = () => {
  const { isDarkMode, theme } = useAppTheme();

  return (
    <Box
      sx={{
        height: '100%',
        bgcolor: 'background.paper',
        p: 2,
        borderRadius: 2,
        boxShadow: isDarkMode 
          ? '0 4px 6px rgba(0, 0, 0, 0.3)' 
          : '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Custo por Equipamento (Top 10)
      </Typography>
      <Box sx={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 40, bottom: 60 }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke={isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'} 
            />
            <XAxis
              dataKey="name"
              angle={-45}
              textAnchor="end"
              height={60}
              tick={{ fill: theme.palette.text.primary }}
            />
            <YAxis
              tick={{ fill: theme.palette.text.primary }}
              tickFormatter={(value) => `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <defs>
              <linearGradient id="costGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d32f2f" />
                <stop offset="100%" stopColor="#4caf50" />
              </linearGradient>
            </defs>
            <Bar
              dataKey="cost"
              fill="url(#costGradient)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};
