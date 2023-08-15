'use client';
import { CustomHeader, LogoContainer, ProfileContainer } from '@/shared/component/header/style/header.style';
import { Badge, Box, Grid, Menu, MenuItem } from '@mui/material';
import Search from '@/shared/component/search/search';
import { HEADER_ICON } from '@/shared/component/header/constant/header.constant';
import Icon from '@/shared/component/icon/icon';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { getCookie } from 'cookies-next';
import Button from '@/shared/component/button/button.component';
import { useRouter } from 'next/navigation';
import { useIsAuthenticatedQuery, useSignOutMutation } from '@/app/services/api/auth.api';
import { useGetOtterQuery } from '@/app/services/api/user.api';
import { UserModel } from '@/app/services/models/users.model';
import profile from '../../../../public/profile/profile.png';

export default function Header () {
 const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
 const [user, setUser] = useState<any>();
 const [skip, setSkip] = useState<boolean>(true);
 const timestampRef = useRef(Date.now()).current;
 const { data:isAuthenticated } = useIsAuthenticatedQuery({sessionId: timestampRef});
 const [signOut, { data:signOutSuccess } ] = useSignOutMutation();
 const {} = useGetOtterQuery<UserModel>(undefined,{ skip });
 const open = Boolean(anchorEl as unknown);
 const route = useRouter();
 useEffect(() => {
  setUser(getCookie('authenticated'));
  // setCookie('authenticated',isAuthenticated);
  if ( isAuthenticated ) {
   setSkip(false);
  }
 }, [isAuthenticated]);

 useEffect(() => {
  if ( signOutSuccess ) {
   route.push('/login');
  }
 }, [signOutSuccess]);
 const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  setAnchorEl(event.currentTarget);
 };
 const handleClose = () => {
  setAnchorEl(null);
 };
 const userSignOut = () => {
  signOut();
 };

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
       <ProfileContainer alignItems='center' onClick={handleClick}>
        <Image src={ profile}
         priority alt='profile' height={60} width={40}/>
       </ProfileContainer>
       <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
         'aria-labelledby': 'basic-button',
        }}
       >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={userSignOut}>Logout</MenuItem>
       </Menu>   
      </Grid>
     </> : <Button click={() => route.push('/login')} label='login' variant='outlined'/>
    }
   </Grid>
  </CustomHeader>
 );
}
