import { Grid } from '@mui/material';
import AuthContainer from '@/app/auth/component/auth-container';
import LoginForm from '@/app/auth/login/components/form.component';

export default function Login (){
 return(
  <AuthContainer>
   <Grid container justifyContent='center'>
    <Grid>
              logo
    </Grid>
    <Grid item container my='32px'>
     <LoginForm />
    </Grid>
   </Grid>
  </AuthContainer>
 );
} 
