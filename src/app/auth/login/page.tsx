'use client';
import { Grid } from '@mui/material';
import AuthContainer from '@/app/auth/component/auth-container';
import Typography from '@/shared/component/typography/typography';
import { theme } from '../../../../styles/theme';
import Image from 'next/image';
import AuthForm from '@/app/auth/component/form.component';
import { AUTH_ICON } from '@/app/auth/constant/auth.constant';

export default function Login (){
 return(
  <AuthContainer>
   <Grid container justifyContent='center'>
    <Grid>logo</Grid>
    <Grid item container mt='32px'>
     <AuthForm type='login' />
     <Grid item container direction='row' justifyContent='center' alignItems='center'>
      <Grid item container border={`1px solid ${theme.palette.black.light}`} xs={4.6} mr='4px'/>
      <Typography label='Login with' variant='caption' />
      <Grid item container xs={4.6} ml='4px' border={`1px solid ${theme.palette.black.light}`}/>
     </Grid>
     <Grid item container my='32px' justifyContent='center'>
      {
       AUTH_ICON.map(({ name, img }) => (
        <Image src={img as string} alt='gmail' key={name} className='cursor--pointer' />
       ))
      }
     </Grid>
    </Grid>
    <Grid item container direction='row' justifyContent='center' gap='4px'>
     <Typography label='Don’t have account?' variant='caption' />
     <Typography label='Sign Up' variant='caption' color='primary.main' className='cursor--pointer' />
    </Grid>
   </Grid>

  </AuthContainer>
 );
}
