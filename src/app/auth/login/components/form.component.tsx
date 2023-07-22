'use client';
import { Formik } from 'formik';
import { Box, Grid, InputAdornment } from '@mui/material';
import { LOGIN_FORM } from '@/app/auth/login/constant/login.constant';
import Input from '@/shared/component/input/input.component';
import Button from '@/shared/component/button/button.component';
import Typography from '@/shared/component/typography/typography';
import Checkbox from '@/shared/component/checkbox/checkbox.component';
import { LOGIN_SCHEMA } from '@/app/auth/services/schema/schema.service';
import { useState } from 'react';
import Icon from '@/shared/component/icon/icon';
import { useLoginUserMutation } from '@/app/auth/services/api-service/api-service';

export default function LoginForm () {
 const [ passwordView, setPasswordView ] = useState<boolean>( true );
 const [ login  ] = useLoginUserMutation();
 return (
  <Formik
   onSubmit={ ({ email, password }) => {
    const data = {
     user: {
      email,
      password
     }
    };
    login(data);
   } }
   initialValues={ { email: '', password: '' } }
   validationSchema={LOGIN_SCHEMA}
   render={ ( { handleChange, values, handleBlur, handleSubmit, errors, touched } ) => (
    <Grid item container>
     {
      LOGIN_FORM.map( ( { label, name, type } ) => (
       <Grid item container my='8px' key={ `${ label }+${ name }` }>
        <Input
         name={ name } 
         label={ label }
         onBlur={handleBlur}
         value={values[name]}      
         variant='outlined'
         type={( type === 'password' &&  passwordView ? 'password' : 'text' ) || type}
         helperText={(touched[name as keyof unknown] &&
             errors[name as keyof unknown] &&
             errors[name as keyof unknown]) as string }
         onChange={ handleChange }
         InputProps={ {
          endAdornment: (
           type === 'password' && <InputAdornment position="start" className='cursor--pointer' onClick={(): void =>
            setPasswordView( !passwordView )}>
            <Icon iconName={ passwordView ? 'visibility' : 'visibility_off' } />
           </InputAdornment>
          ),
         } }      
        />
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
      <Button click={ handleSubmit } variant='contained' label='Login' className='width--full' />
     </Grid>
    </Grid>
   ) }
  />
 );
}
