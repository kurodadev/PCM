import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';

// Lazy loading para outras páginas
const Equipment = React.lazy(() => import('../pages/Equipment'));
const WorkOrders = React.lazy(() => import('../pages/WorkOrders'));
const NewWorkOrder = React.lazy(() => import('../pages/NewWorkOrder'));
const Employees = React.lazy(() => import('../pages/Employees'));
const SpareParts = React.lazy(() => import('../pages/SpareParts'));
const Documents = React.lazy(() => import('../pages/Documents'));
const Settings = React.lazy(() => import('../pages/Settings'));

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!isAuthenticated) {
    return <Route path="/login" element={<Login />} />;
  }

  return <>{children}</>;
};

export const AppRoutes = () => {
  return (
    <React.Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/equipamentos"
          element={
            <ProtectedRoute>
              <Equipment />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/ordens-servico"
          element={
            <ProtectedRoute>
              <WorkOrders />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/ordens-servico/nova"
          element={
            <ProtectedRoute>
              <NewWorkOrder />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/funcionarios"
          element={
            <ProtectedRoute>
              <Employees />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/pecas"
          element={
            <ProtectedRoute>
              <SpareParts />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/documentos"
          element={
            <ProtectedRoute>
              <Documents />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/configuracoes"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
      </Routes>
    </React.Suspense>
  );
};
