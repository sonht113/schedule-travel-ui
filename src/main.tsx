import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';

import './index.css';

import QueryProvider from './provider/query-provider.tsx';
import Routes from './routes/index.tsx';
import { ToasterConfig } from '@/components';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#ffea00',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider>
      <ThemeProvider theme={theme}>
        <ToasterConfig />
        <Routes />
      </ThemeProvider>
    </QueryProvider>
  </React.StrictMode>,
);
