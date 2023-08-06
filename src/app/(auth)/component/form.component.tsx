'use client';
import { Formik, FormikValues } from 'formik';
import { Box, Grid, InputAdornment } from '@mui/material';
import Input from '@/shared/component/input/input.component';
import Button from '@/shared/component/button/button.component';
import Typography from '@/shared/component/typography/typography';
import Checkbox from '@/shared/component/checkbox/checkbox.component';
import { LOGIN_SCHEMA, REGISTRATION_SCHEMA } from '@/app/(auth)/services/schema/schema.service';
import { useEffect, useState } from 'react';
import Icon from '@/shared/component/icon/icon';
import { useLoginUserMutation, useRegistrationMutation } from '@/app/(auth)/services/api-service/api-service';
import {
 GENDER,
 LOGIN_FORM,
 LOGIN_INITIAL_VALUE,
 REGISTER_FORM,
 REGISTRATION_INITIAL_VALUE
} from '@/app/(auth)/constant/auth.constant';
import Dropdown from '@/shared/component/dropdown/dropdown';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';

function AuthForm (props: { type?: string, setEmail?: any }) {
 const router = useRouter();
 const [email, setEmail] = useState<string>('');
 const [ passwordView, setPasswordView ] = useState<{ password: boolean, confirmPassword: boolean }>( {
  password: true,
  confirmPassword: true
 } );
 const [ login, { data:loginData, error }  ] = useLoginUserMutation();
 const [ register, { data: registration } ] = useRegistrationMutation();

 useEffect(() => {
  if ( loginData ) {
   setCookie('authenticated', loginData);
   loginData && router.push('/');
  }

  if ( registration ) {
   props?.setEmail(email);
  }
  if (error?.data?.error === 'You have to confirm your email address before continuing.'  )
  {
   props.setEmail(email);
  }
 }, [loginData, registration, error]);

 const showPassword = (name: string) => {
  name === 'password' ? setPasswordView( { 
   password:  !passwordView.password,
   confirmPassword: passwordView.confirmPassword   
  }) : setPasswordView( {
   password: passwordView.password,
   confirmPassword: !passwordView.confirmPassword
  });
 };
 const submitData = (value: FormikValues) => {
  const data = { user: {
   email: value.email,
   password: value.password,
   username: value.userName,
   name: value.name,
   gender: value?.gender?.toLowerCase,
   password_confirmation: value.confirmPassword
  }
  };
  setEmail(value.email);
  props?.type === 'login' ? login(data) : register(data);
 };
 return (
  <Formik
   onSubmit={ (values) => {
    submitData(values);
   } }
   initialValues={ props?.type === 'login' ? LOGIN_INITIAL_VALUE : REGISTRATION_INITIAL_VALUE  }
   validationSchema={ props?.type === 'login'? LOGIN_SCHEMA : REGISTRATION_SCHEMA }
  >
   {({ handleChange, handleBlur, values, touched, errors, handleSubmit }) => (
    <Grid item container>
     {
      ( props?.type === 'login' ? LOGIN_FORM : REGISTER_FORM ).map( (
       { label, name, type } ) => (
       <Grid item container my='8px' key={ `${ label }+${ name }` }>
        {
         type !== 'dropdown' ?
          <Input
           name={ name }
           label={ label }
           onBlur={handleBlur}
           value={values[name]}
           variant='outlined'
           type={
            (name === 'password' ? !passwordView.password && 'text' : !passwordView.confirmPassword && 'text') || type
           }
           helperText={(touched[name as keyof unknown] &&
                           errors[name as keyof unknown] &&
                           errors[name as keyof unknown]) as string }
           onChange={ handleChange }
           InputProps={ {
            endAdornment: (
             type === 'password' && <InputAdornment position="start" className='cursor--pointer' onClick={(): void =>
              showPassword(name)}
             >
              {
               name === 'password' ?
                <Icon iconName={ passwordView.password ? 'lock_outlined' : 'lock_open' } color='#0079A2' /> :
                <Icon iconName={ passwordView.confirmPassword ? 'lock_outlined' : 'lock_open' } color='#0079A2' />
              }
             </InputAdornment>
            ),
           } }
          />: <Dropdown
           label='Gender'
           value={GENDER}
           name='gender'
           handleChange={handleChange}
           values={values['gender']}
          />
        }
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
      <Button click={ handleSubmit }
       variant='contained' label={ props?.type === 'login'? 'Login' : 'Signup' } className='width--full' />
     </Grid>
    </Grid>
   )}
  </Formik>
 );
}
export default AuthForm;
