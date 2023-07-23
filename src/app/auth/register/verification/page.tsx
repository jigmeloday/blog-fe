'use client';
import AuthContainer from '@/app/auth/component/auth-container';
import { Grid } from '@mui/material';
import Typography from '@/shared/component/typography/typography';
import VerificationInput from 'react-verification-input';
import Button from '@/shared/component/button/button.component';

export default function Verification () {
 return(
  <AuthContainer>
   <Grid item container py='100px' direction='column' alignItems='center' justifyContent='center'>
    <Typography label='Verification' variant='body1' fontSize='32px' fontWeight='600' />
    <Typography label='Enter the OTP' variant='caption' fontSize='16px' />
    <Grid item container my='32px'>
     <VerificationInput
      length={4}
      classNames={{
       container: 'container',
       character: 'character',
       characterInactive: 'character--inactive',
       characterSelected: 'character--selected',
      }}
      inputProps={{ autoComplete: 'one-time-code' }}
      validChars="0-9"
      placeholder="_"
     />
    </Grid>
    <Grid item container direction='row' justifyContent='center' gap='8px' mb='20px'>
     <Typography label='Didn’t receive OTP?' variant='caption' />
     <Typography label='Resend OTP' variant='caption' color='primary.main' className='cursor--pointer' />
    </Grid>
    <Button label='Submit' variant='contained' className='width--full' />
   </Grid>
  </AuthContainer>
 );
};
