'use client';
import { Grid } from '@mui/material';
import Typography from '@/shared/component/typography/typography';
import Button from '@/shared/component/button/button.component';
import { useEffect } from 'react';
import { useConfirmationMutation, useResendConfirmationMutation } from '@/app/(auth)/services/api-service/api-service';
import { useRouter } from 'next/navigation';
import Input from '@/shared/component/input/input.component';
import { Formik, FormikValues } from 'formik';

export default function Verification (props: { email: string }) {
 const [confirmation, { data }] = useConfirmationMutation();
 const [resendConfirmation] = useResendConfirmationMutation();
 const route = useRouter();

 useEffect(() => {
  data && route.push('/(auth)/login');
 }, [data]);


 const submitCode =(values: FormikValues) => {
  values && confirmation(values.code);
 };
 const resend = () => {
  resendConfirmation({
   email: props?.email
  });
 };
 return(
  <Formik initialValues={{ code: '' }} onSubmit={(values) => submitCode(values)}>
   {({handleChange, handleSubmit}) => (
    <Grid item container py='100px' direction='column' alignItems='center' justifyContent='center'>
     <Typography label='Verification' variant='body1' fontSize='32px' fontWeight='600' />
     <Typography label='Enter the OTP' variant='caption' fontSize='16px' />
     <Grid item container my='32px'>
      <Input name='code' onChange={handleChange} variant='outlined' />
     </Grid>
     <Grid item container direction='row' justifyContent='center' gap='8px' mb='20px'>
      <Typography label='Didn’t receive OTP?' variant='caption' />
      <Typography
       click={() => resend()}
       label='Resend OTP'
       variant='caption' color='primary.main' className='cursor--pointer' />
     </Grid>
     <Button click={handleSubmit} label='Submit' variant='contained' className='width--full' />
    </Grid>
   )}
  </Formik>
 );
};
