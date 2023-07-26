'use client';
import { Grid } from '@mui/material';
import { ReactNode } from 'react';
import { FormContainer, Background } from '@/app/(auth)/component/style/auth-style';
import { theme } from '../../../../styles/theme';

export default function AuthContainer (props: ReactNode) {
 return(
  <Grid className='position--relative' item container direction='row'>
   <Background item xs={8}/>
   <Background item
    background={ `
       var(--gradient, linear-gradient(225deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%))
       ` }
    xs={4}/>
   <FormContainer>
    {props.children}
   </FormContainer>
  </Grid>
 );
} 
