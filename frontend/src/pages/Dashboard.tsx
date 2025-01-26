import React, { useState, useMemo, useCallback } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import {
  MonetizationOn as MonetizationOnIcon,
  Engineering as EngineeringIcon,
  Speed as SpeedIcon,
  Timeline as TimelineIcon,
  Update as UpdateIcon,
  Pending as PendingIcon,
} from '@mui/icons-material';
import { MetricCard } from '../components/MetricCard';
import { MaintenanceFilter } from '../components/filters/MaintenanceFilter';
import inventory from '../data/inventory.json';

interface Equipment {
  code: string;
  name: string;
  type: string;
  power: number | null;
  sector: string;
  manufacturingYear: number;
  energyCostPerHour: number | null;
}

export const Dashboard = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    equipment1: '',
    equipment2: '',
    equipment3: '',
  });
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedArea, setSelectedArea] = useState('TODAS');

  // Dados estáticos memoizados
  const staticData = useMemo(() => ({
    totalValue: 156789.50,
    maintenanceCost: 23456.78,
    energyCost: 34567.89,
    availability: 98.5,
    reliability: 95.2,
    performance: 92.8,
  }), []);

  // Lista de equipamentos memoizada
  const equipments = useMemo(() => {
    return [
      { id: '', name: 'Selecione...' },
      ...inventory.equipment.map(eq => ({
        id: eq.code,
        name: eq.name
      }))
    ];
  }, []);

  // Função de filtro memoizada
  const getAvailableEquipments = useCallback((equipmentNumber: 1 | 2 | 3) => {
    const selectedEquipments = [
      selectedFilters.equipment1,
      selectedFilters.equipment2,
      selectedFilters.equipment3
    ];

    const otherSelectedEquipments = selectedEquipments.filter((_, index) => 
      index !== equipmentNumber - 1
    );

    return equipments.filter(eq => 
      eq.id === '' || !otherSelectedEquipments.includes(eq.id)
    );
  }, [selectedFilters, equipments]);

  // Função de mudança de filtro memoizada
  const handleFilterChange = useCallback((filters: { 
    year?: number; 
    month?: number;
    area?: string;
    equipment1?: string;
    equipment2?: string;
    equipment3?: string;
  }) => {
    if (filters.year !== undefined) setSelectedYear(filters.year);
    if (filters.month !== undefined) setSelectedMonth(filters.month);
    if (filters.area !== undefined) setSelectedArea(filters.area);
    if (filters.equipment1 !== undefined || filters.equipment2 !== undefined || filters.equipment3 !== undefined) {
      setSelectedFilters(prev => ({
        ...prev,
        ...(filters.equipment1 !== undefined && { equipment1: filters.equipment1 }),
        ...(filters.equipment2 !== undefined && { equipment2: filters.equipment2 }),
        ...(filters.equipment3 !== undefined && { equipment3: filters.equipment3 })
      }));
    }
  }, []);

  // Valores calculados memoizados
  const calculatedValues = useMemo(() => {
    const baseValue = staticData.totalValue;
    const equipmentMultiplier = [selectedFilters.equipment1, selectedFilters.equipment2, selectedFilters.equipment3]
      .filter(Boolean).length * 0.15;
    
    return {
      totalValue: baseValue * (1 + equipmentMultiplier),
      maintenanceCost: staticData.maintenanceCost * (1 + equipmentMultiplier),
      energyCost: staticData.energyCost * (1 + equipmentMultiplier),
      availability: staticData.availability,
      reliability: staticData.reliability,
      performance: staticData.performance
    };
  }, [selectedFilters, staticData]);

  return (
    <Box sx={{ p: 3 }}>
      <MaintenanceFilter
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        selectedArea={selectedArea}
        selectedEquipment1={selectedFilters.equipment1}
        selectedEquipment2={selectedFilters.equipment2}
        selectedEquipment3={selectedFilters.equipment3}
        onFilterChange={handleFilterChange}
        getAvailableEquipments={getAvailableEquipments}
      />

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={4}>
          <MetricCard
            title="Valor Total"
            value={calculatedValues.totalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            icon={<MonetizationOnIcon />}
            progress={75}
            subtitle="Últimos 30 dias"
            info="Total gasto com manutenção no período"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MetricCard
            title="Custo de Manutenção"
            value={calculatedValues.maintenanceCost.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            icon={<EngineeringIcon />}
            progress={50}
            subtitle="Últimos 30 dias"
            info="Custo total com manutenção no período"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MetricCard
            title="Custo de Energia"
            value={calculatedValues.energyCost.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            icon={<SpeedIcon />}
            progress={25}
            subtitle="Últimos 30 dias"
            info="Custo total com energia no período"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MetricCard
            title="Disponibilidade"
            value={`${calculatedValues.availability}%`}
            icon={<TimelineIcon />}
            progress={calculatedValues.availability}
            subtitle="Últimos 30 dias"
            info="Disponibilidade dos equipamentos no período"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MetricCard
            title="Confiabilidade"
            value={`${calculatedValues.reliability}%`}
            icon={<UpdateIcon />}
            progress={calculatedValues.reliability}
            subtitle="Últimos 30 dias"
            info="Confiabilidade dos equipamentos no período"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MetricCard
            title="Desempenho"
            value={`${calculatedValues.performance}%`}
            icon={<PendingIcon />}
            progress={calculatedValues.performance}
            subtitle="Últimos 30 dias"
            info="Desempenho dos equipamentos no período"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
