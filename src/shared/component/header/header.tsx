'use client';
import { CustomHeader, LogoContainer, ProfileContainer } from '@/shared/component/header/style/header.style';
import { Badge, Box, Grid } from '@mui/material';
import Search from '@/shared/component/search/search';
import { HEADER_ICON } from '@/shared/component/header/constant/header.constant';
import Icon from '@/shared/component/icon/icon';
import profile from '../../../../public/profile/profile.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { setCookie } from 'cookies-next';
import Button from '@/shared/component/button/button.component';
import { useRouter } from 'next/navigation';
import { useIsAuthenticatedQuery } from '@/app/services/api/auth.api';
import { useGetOtterMutation } from '@/app/services/api/user.api';

export default function Header () {
 const [user, setUser] = useState<any>();
 const { data:isAuthenticated } = useIsAuthenticatedQuery();
 const [data] = useGetOtterMutation();
 const route = useRouter();
 useEffect(() => {
  setUser(isAuthenticated);
  setCookie('authenticated',isAuthenticated);
  if ( isAuthenticated ) {
   data();
  }
 }, [isAuthenticated]);

 return (
  <CustomHeader container item direction='row' justifyContent='center' alignItems='center'>
   <Grid item container direction='row' xs={6}>
    <LogoContainer item container xs='auto'>
           Logo
    </LogoContainer>
    <Grid item container xs={5} ml='48px'>
     <Search name='search' label='Search' placeholder='Search' />
    </Grid>
   </Grid>
   <Grid item container justifyContent='end' xs={6} alignItems='center'>
    {
     user ? <>
      {
       HEADER_ICON.map(({ name }) => (
        <Box key={name} pr='32px'>
         <Badge badgeContent={4} color='error'>
          <Icon  iconName={name} className='cursor--pointer' />
         </Badge>
        </Box>
       ))
      }
      <Grid item alignItems='center'>
       <ProfileContainer alignItems='center' >
        <Image src={profile} alt='profile' height={60} width={40}/>
       </ProfileContainer>
      </Grid>
     </> : <Button click={() => route.push('/login')} label='login' variant='outlined'/>
    }
   </Grid>
  </CustomHeader>
 );
}
