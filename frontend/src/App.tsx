import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, AuthProvider } from './contexts';
import { Routes } from './routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <CssBaseline />
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
