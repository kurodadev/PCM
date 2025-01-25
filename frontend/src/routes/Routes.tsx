import React from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';
import { Login } from '../pages/Login';
import { MainLayout } from '../components/layout/MainLayout';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/login" />;
};

const Dashboard = () => (
  <div>Dashboard em construção</div>
);

const WorkOrders = () => (
  <div>Ordens de Serviço em construção</div>
);

const Inventory = () => (
  <div>Inventário em construção</div>
);

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/login" element={<Login />} />
      
      <Route
        path="/"
        element={
          <PrivateRoute>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </PrivateRoute>
        }
      />
      
      <Route
        path="/ordens-servico"
        element={
          <PrivateRoute>
            <MainLayout>
              <WorkOrders />
            </MainLayout>
          </PrivateRoute>
        }
      />

      <Route
        path="/inventario"
        element={
          <PrivateRoute>
            <MainLayout>
              <Inventory />
            </MainLayout>
          </PrivateRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </RouterRoutes>
  );
};
