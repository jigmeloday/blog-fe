'use client';
import { CustomHeader, LogoContainer, ProfileContainer } from '@/shared/component/header/style/header.style';
import { Badge, Box, Grid } from '@mui/material';
import Search from '@/shared/component/search/search';
import { HEADER_ICON } from '@/shared/component/header/constant/header.constant';
import Icon from '@/shared/component/icon/icon';
import profile from '../../../../public/profile/profile.png';
import Image from 'next/image';

export default function Header () {
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
     HEADER_ICON.map(({ name }) => (
      <Box key={name} pr='32px'>
       <Badge badgeContent={4} color='error'>
        <Icon  iconName={name} className='cursor--pointer' />
       </Badge>
      </Box>
     ))
    }
    <Grid item alignItems='center'>
     <ProfileContainer >
      <Image src={profile} alt='profile' fill/>
     </ProfileContainer>
    </Grid>
   </Grid>
  </CustomHeader>
 );
}
