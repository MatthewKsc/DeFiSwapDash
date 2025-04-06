import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import './index.css'
import App from './App.tsx'
import lightGreenTheme from './themes/lightGreenTheme.ts';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={lightGreenTheme}>
            <CssBaseline />
            <App/>
        </ThemeProvider>
    </StrictMode>,
);
