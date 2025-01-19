import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';

// Lazy loading para outras páginas
const Equipment = React.lazy(() => import('../pages/Equipment'));
const WorkOrders = React.lazy(() => import('../pages/WorkOrders'));
const NewWorkOrder = React.lazy(() => import('../pages/NewWorkOrder'));
const Employees = React.lazy(() => import('../pages/Employees'));
const SpareParts = React.lazy(() => import('../pages/SpareParts'));
const Documents = React.lazy(() => import('../pages/Documents'));
const Settings = React.lazy(() => import('../pages/Settings'));

export const AppRoutes = () => {
  return (
    <React.Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/equipamentos" element={<Equipment />} />
        <Route path="/ordens-servico" element={<WorkOrders />} />
        <Route path="/ordens-servico/nova" element={<NewWorkOrder />} />
        <Route path="/funcionarios" element={<Employees />} />
        <Route path="/pecas" element={<SpareParts />} />
        <Route path="/documentos" element={<Documents />} />
        <Route path="/configuracoes" element={<Settings />} />
      </Routes>
    </React.Suspense>
  );
};
