import React from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Grid,
} from '@mui/material';

interface MaintenanceFilterProps {
  selectedYear: number;
  selectedMonth: number;
  selectedArea: string;
  selectedEquipment1: string;
  selectedEquipment2: string;
  selectedEquipment3: string;
  onFilterChange: (filters: {
    year?: number;
    month?: number;
    area?: string;
    equipment1?: string;
    equipment2?: string;
    equipment3?: string;
  }) => void;
  getAvailableEquipments: (equipmentNumber: 1 | 2 | 3) => Array<{ id: string; name: string; }>;
}

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

const months = [
  { value: 1, label: 'Janeiro' },
  { value: 2, label: 'Fevereiro' },
  { value: 3, label: 'Março' },
  { value: 4, label: 'Abril' },
  { value: 5, label: 'Maio' },
  { value: 6, label: 'Junho' },
  { value: 7, label: 'Julho' },
  { value: 8, label: 'Agosto' },
  { value: 9, label: 'Setembro' },
  { value: 10, label: 'Outubro' },
  { value: 11, label: 'Novembro' },
  { value: 12, label: 'Dezembro' }
];

const areas = ['TODAS', 'PRODUÇÃO', 'MANUTENÇÃO', 'QUALIDADE', 'LOGÍSTICA'];

export const MaintenanceFilter: React.FC<MaintenanceFilterProps> = ({
  selectedYear,
  selectedMonth,
  selectedArea,
  selectedEquipment1,
  selectedEquipment2,
  selectedEquipment3,
  onFilterChange,
  getAvailableEquipments,
}) => {
  const handleYearChange = (event: SelectChangeEvent<number>) => {
    onFilterChange({ year: event.target.value as number });
  };

  const handleMonthChange = (event: SelectChangeEvent<number>) => {
    onFilterChange({ month: event.target.value as number });
  };

  const handleAreaChange = (event: SelectChangeEvent<string>) => {
    onFilterChange({ area: event.target.value });
  };

  const handleEquipmentChange = (equipmentNumber: 1 | 2 | 3) => (event: SelectChangeEvent<string>) => {
    onFilterChange({
      [`equipment${equipmentNumber}`]: event.target.value
    });
  };

  return (
    <Box sx={{ width: '100%', mb: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={2}>
          <FormControl fullWidth size="small">
            <InputLabel>Ano</InputLabel>
            <Select
              value={selectedYear}
              label="Ano"
              onChange={handleYearChange}
            >
              {years.map(year => (
                <MenuItem key={year} value={year}>{year}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <FormControl fullWidth size="small">
            <InputLabel>Mês</InputLabel>
            <Select
              value={selectedMonth}
              label="Mês"
              onChange={handleMonthChange}
            >
              {months.map(month => (
                <MenuItem key={month.value} value={month.value}>
                  {month.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <FormControl fullWidth size="small">
            <InputLabel>Área</InputLabel>
            <Select
              value={selectedArea}
              label="Área"
              onChange={handleAreaChange}
            >
              {areas.map(area => (
                <MenuItem key={area} value={area}>{area}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <FormControl fullWidth size="small">
            <InputLabel>Equipamento 1</InputLabel>
            <Select
              value={selectedEquipment1}
              label="Equipamento 1"
              onChange={handleEquipmentChange(1)}
            >
              {getAvailableEquipments(1).map(equipment => (
                <MenuItem key={equipment.id} value={equipment.id}>
                  {equipment.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <FormControl fullWidth size="small">
            <InputLabel>Equipamento 2</InputLabel>
            <Select
              value={selectedEquipment2}
              label="Equipamento 2"
              onChange={handleEquipmentChange(2)}
            >
              {getAvailableEquipments(2).map(equipment => (
                <MenuItem key={equipment.id} value={equipment.id}>
                  {equipment.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <FormControl fullWidth size="small">
            <InputLabel>Equipamento 3</InputLabel>
            <Select
              value={selectedEquipment3}
              label="Equipamento 3"
              onChange={handleEquipmentChange(3)}
            >
              {getAvailableEquipments(3).map(equipment => (
                <MenuItem key={equipment.id} value={equipment.id}>
                  {equipment.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};
