'use client';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import {ReactNode} from 'react';
import { theme } from '../../styles/theme';
import { store } from '@/rtk-store/rtk-store';

function Providers ( { children }: { children: ReactNode }) {
 return (
  <ThemeProvider theme={theme}>
   <Provider store={store}>
    {children}
   </Provider>
  </ThemeProvider>
 );
}

export default Providers;
