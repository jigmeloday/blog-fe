import { createTheme } from '@mui/material';

export const theme = createTheme({
 palette: {
  primary: {
   main : '#0079A2',
   light : '#E6F2F6',
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
  black: {
   main: '#1F1F1F',
   light: '#ABABAB',
   dark: '#3D3D3C',
   contrastText: '#626262',
  },
  white: {
   main: '#FAF9F9',
   light: '#FAF9F9',
   contrastText: '#CACACA'
  },
 },
 typography: {

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

declare module '@mui/material/styles' {

 interface Palette {
  black: Palette['primary'];
 }

 interface PaletteOptions {
  black?: PaletteOptions['primary'];
 }

 interface Palette {
  white: Palette['primary'];
 }

 interface PaletteOptions {
  white?: PaletteOptions['primary'];
 }
}
