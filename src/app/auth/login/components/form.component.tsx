'use client';
import { Formik } from 'formik';
import { Box, Grid } from '@mui/material';
import { LOGIN_FORM } from '@/app/auth/login/constant/login.constant';
import Input from '@/shared/component/input/input.component';
import Button from '@/shared/component/button/button.component';
import Typography from '@/shared/component/typography/typography';
import Checkbox from '@/shared/component/checkbox/checkbox.component';

export default function LoginForm () {
 return (
  <Formik
   onSubmit={ () => alert( 'hello' ) }
   initialValues={ {} }
   render={ ( { handleChange, handleSubmit } ) => (
    <Grid item container>
     {
      LOGIN_FORM.map( ( { label, name } ) => (
       <Grid item container my='16px' key={ `${ label }+${ name }` }>
        <Input name={ name } label={ label } onChange={ handleChange }/>
       </Grid>
      ) )
     }
     <Grid item container direction='row'>
      <Grid item container direction='row' xs={6} alignItems='center'>
       <Box>
        <Checkbox/>
       </Box>
       <Box pl='8px'>
        <Typography label='Remember me' variant='caption'/>
       </Box>
      </Grid>
      <Grid item container xs={6} justifyContent='end'>
       <Typography label='Forgot Password?' variant='caption' color='primary.main' className='cursor--pointer' />
      </Grid>
     </Grid>
     <Grid item container my='32px' >
      <Button click={ handleSubmit } variant='contained' label='Login' className='width--full'/>
     </Grid>
    </Grid>
   ) }
  />
 );
}
