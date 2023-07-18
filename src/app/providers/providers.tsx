'use client'

import { ThemeProvider } from '@mui/material';
import { theme } from '@/app/assests/theme';

function Providers( { children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default Providers;
