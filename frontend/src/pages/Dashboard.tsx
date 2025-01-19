import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

export const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Total de Equipamentos</Typography>
            <Typography variant="h4">120</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Ordens em Aberto</Typography>
            <Typography variant="h4">25</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
