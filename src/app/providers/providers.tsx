'use client'

import { ThemeProvider } from '@mui/material';

function Providers( { children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default Providers;
