'use client';
import { Formik } from 'formik';
import { Grid } from '@mui/material';
import { LOGIN_FORM } from '@/app/auth/login/constant/login.constant';
import Input from '@/shared/component/input/input.component';
import Button from '@/shared/component/button/button.component';

export default function LoginForm () {
 return(
  <Formik
   onSubmit={() => alert('hello')}
   initialValues={{}}
   render={({ handleChange, handleSubmit }) => (
    <Grid item container>
     {
      LOGIN_FORM.map(({ label, name }) => (
       <Grid item container my='16px' key={`${label}+${name}`}>
        <Input name={name} label={label} onChange={handleChange} />
       </Grid>
      ))
     }
     <Button click={handleSubmit} variant='contained' label='Login' className='width--full' />
    </Grid>
   )}
  />
 );
}
