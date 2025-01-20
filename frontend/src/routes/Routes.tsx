import React from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { WorkOrders } from '../pages/WorkOrders';
import { Login } from '../pages/Login';
import { MainLayout } from '../components/layout/MainLayout';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/login" />;
};

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/login" element={<Login />} />
      
      {/* Rotas protegidas */}
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
              <div>Página de Inventário em construção</div>
            </MainLayout>
          </PrivateRoute>
        }
      />

      <Route
        path="/analise-custo"
        element={
          <PrivateRoute>
            <MainLayout>
              <div>Página de Análise de Custo em construção</div>
            </MainLayout>
          </PrivateRoute>
        }
      />

      <Route
        path="/configuracoes"
        element={
          <PrivateRoute>
            <MainLayout>
              <div>Página de Configurações em construção</div>
            </MainLayout>
          </PrivateRoute>
        }
      />

      {/* Rota para páginas não encontradas */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </RouterRoutes>
  );
};
