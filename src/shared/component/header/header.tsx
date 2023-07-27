'use client';
import { CustomHeader, LogoContainer } from '@/shared/component/header/style/header.style';
import { Grid } from '@mui/material';
import Input from '@/shared/component/input/input.component';

export default function Header () {
 return (
  <CustomHeader container items direction='row'>
   <LogoContainer>
       Logo
   </LogoContainer>
   <Grid item container>
    <Input name='search' />
   </Grid>
   <Grid item container justifyContent='end'>
       hello
   </Grid>
  </CustomHeader>
 );
}
