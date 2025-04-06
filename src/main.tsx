import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import './index.css'
import lightGreenTheme from './themes/lightGreenTheme.ts';
import { RouterProvider } from 'react-router';
import { router } from './routes.ts';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={lightGreenTheme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>,
);
