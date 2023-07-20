'use client';
import { Grid } from '@mui/material';
import { ReactNode } from 'react';
import { FormContainer, LeftSide, RightSide } from '@/app/auth/component/style/auth-style';

export default function AuthContainer (props: ReactNode) {
 return(
  <Grid className='position--relative' item container direction='row' border='1px solid black'>
   <RightSide xs={8}/>
   <LeftSide />
   <FormContainer>
    {props.children}
   </FormContainer>
  </Grid>
 );
} 
