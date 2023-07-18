import { createTheme } from '@mui/material';

export const theme = createTheme({
 palette: {
  primary: {
   main : '#0079A2',
   light : '#F9EAF3',
   dark : 'rgba(0,86,115,0.50)'
  },
  success: {
   main: '#76D03F'
  },
  error: {
   main: '#E74C3C'
  },
  warning: {
   main: '#F39C12',
   contrastText: '#FFFFFF'
  },
 },
 typography: {
  // fontFamily: 'Open Sans, sans-serif', need to talk with UX

  body1: {
   fontSize: '16px',
  },

  body2: {
   fontSize: '14px',
  },
  subtitle2: {
   fontSize: '12px',
  }
 },
 components: {
  MuiTypography: {
   styleOverrides: {
    root: {
     fontWeight: '400'
    },
   },
  },
 },
});
