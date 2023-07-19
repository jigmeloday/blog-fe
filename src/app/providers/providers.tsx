'use client';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from '@/app/rtk-store/rtk-store';
import {ReactNode} from 'react';
import { theme } from '../../../styles/theme';

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
