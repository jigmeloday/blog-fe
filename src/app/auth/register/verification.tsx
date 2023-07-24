'use client';
import { Grid } from '@mui/material';
import Typography from '@/shared/component/typography/typography';
import VerificationInput from 'react-verification-input';
import Button from '@/shared/component/button/button.component';
import { useEffect, useState } from 'react';
import { useConfirmationMutation, useResendConfirmationMutation } from '@/app/auth/services/api-service/api-service';
import { useRouter } from 'next/navigation';

export default function Verification (props: { email: string }) {
 const [valid, setValid] = useState<string>( '' );
 const [confirmation] = useConfirmationMutation();
 const [resendConfirmation] = useResendConfirmationMutation();
 const route = useRouter();

 useEffect(() => {
  confirmation && route.push('/auth/login');
 }, [confirmation]);

 const verification = ( event?: string ): void => {
  if ( event?.length === 6 ) {
   setValid( event );
  }
 };
 const submitCode =() => {
  valid && confirmation(valid);
 };
 const resend = () => {
  resendConfirmation({
   email: props.email
  });
 };
 return(
  <Grid item container py='100px' direction='column' alignItems='center' justifyContent='center'>
   <Typography label='Verification' variant='body1' fontSize='32px' fontWeight='600' />
   <Typography label='Enter the OTP' variant='caption' fontSize='16px' />
   <Grid item container my='32px'>
    <VerificationInput
     name='code'
     onChange={verification}
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
    <Typography 
     click={() => resend()} 
     label='Resend OTP' 
     variant='caption' color='primary.main' className='cursor--pointer' />
   </Grid>
   <Button click={submitCode} label='Submit' variant='contained' className='width--full' />
  </Grid>
 );
};
