'use client';
import { Grid } from '@mui/material';
import Button from '@/shared/component/button/button.component';
import Image from 'next/image';
import Typography from '@/shared/component/typography/typography';
import { ProfileImage } from '@/shared/component/preview-card/style/preview.style';
import { useState } from 'react';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import image from '../../../../public/profile/dummy-images/photo-1494790108377-be9c29b29330.jpg';

export default function Popular ( props: {item: any}) {
 const [follow, setFollow] = useState(false);
 const user = getCookie('authenticated');
 const router = useRouter();
 const followAction = () => {
  if ( user ) {
   setFollow(!follow);
   return;
  }
  router.push('/login');
 };

 return(
  <Grid container my='12px'>
   <Grid item container direction='row' gap='12px'>
    <Grid item container xs='auto'>
     <ProfileImage>
      <Image src={image} alt='profile' height={42} width={42} className='position--absolute'/>
     </ProfileImage>
     
    </Grid>
    <Grid item container xs={10}>
     <Typography label={props.item.name} variant='body1' fontWeight='500' fontSize='14px'/>
     <Grid item container gap='16px' mt='4px'>
      <Typography label={`${props.item.follower_count} Followers`} variant='caption' fontWeight='300' />
      <Typography label={`${props.item.article_count} Whispers`} variant='caption' fontWeight='300' />
      <Typography label={`${props.item.following_count} Following`} variant='caption' fontWeight='300' />
     </Grid>  
     <Grid>
     </Grid>
    </Grid>
   </Grid>
   <Grid item container xs={12} px='64px' mt='4px'>
    <Button click={() => followAction()} label='Follow' variant='outlined' />
   </Grid>
  </Grid>
 );
}
