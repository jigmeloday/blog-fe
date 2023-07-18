'use client'
import { ThemeProvider } from '@mui/material';
import { theme } from '@/app/assests/theme';
import { Provider } from 'react-redux';
import { store } from '@/app/rtk-store/rtk-store';

function Providers( { children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                {children}
            </Provider>
        </ThemeProvider>
    )
}

export default Providers;
