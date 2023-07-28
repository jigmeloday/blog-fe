'use client';
import { CustomHeader, LogoContainer } from '@/shared/component/header/style/header.style';
import { Grid } from '@mui/material';
import Search from '@/shared/component/search/search';

export default function Header () {
 return (
  <CustomHeader container items direction='row'>
   <Grid item container direction='row' xs={6}>
    <LogoContainer item container xs='auto'>
           Logo
    </LogoContainer>
    <Grid item container xs={5} ml='48px'>
     <Search name='search' />
    </Grid>
   </Grid>
   <Grid item container justifyContent='end' xs={6}>
       hello
   </Grid>
  </CustomHeader>
 );
}
