import { Box, Grid, Menu, MenuItem } from '@mui/material';
import Image from 'next/image';
import img from '../../../../public/profile/profile.png';
import { ProfileImage } from '@/shared/component/preview-card/style/preview.style';
import Typography from '@/shared/component/typography/typography';
import Icon from '@/shared/component/icon/icon';
import { useState } from 'react';
import Button from '@/shared/component/button/button.component';

function PreviewCard () {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(!!anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
 return(
  <Grid item container direction='row' py='24px' borderBottom='1px solid var(--primary-blue-50, #E6F2F6)' mb='44px'>
   <Grid item container xs={12}>
    <Grid item container direction='row'>
     <ProfileImage>
      <Image src={img} alt='profile' height={60} width={40} />
     </ProfileImage>
     <Grid item container xs={8} ml='12px' direction='column'>
      <Grid item container direction='row' alignItems='center'>
       <Typography label='Jigme Lodey' variant='body1' fontSize='16px' fontWeight='400' />
       <Grid item container pl='12px' direction='row' xs='auto'>
        <Typography label='-' variant='body1' fontSize='12px' fontWeight='300' />
        <Box ml='4px'>
         <Typography label='following' variant='body1' fontSize='12px' fontWeight='300' />
        </Box>
       </Grid>
      </Grid>
      <Typography label='Monday 24th Jan, 2023' variant='caption' fontSize='12px' fontWeight='300' />
     </Grid>
    </Grid>
    <Grid item container my='24px'>
     <Typography label='Reason why Sir.Suraj call me Pema Loday' variant='body' fontSize='24px' fontWeight='600' />
     <Box my='12px' fontSize='16px' fontWeight='300' lineHeight='24px'>
             Because in past life I were his rat best
         friend. One day we went to park to play with human
         children. That time I accidently ate human poop. I choked and instead
         of helping me he was laughing at me. So I became very angry and I threw a grain of salt.
     </Box>
     <Typography label='Read More' variant='body1' fontSize='16px' className='cursor--pointer' fontWeight='500' />
    </Grid>
    <Grid item container direction='row' alignItems='center' xs={12}>
     <Grid item container alignItems='center' gap='10px' xs='auto'>
      <Icon iconName='favorite_outlined' className='cursor--pointer' />
      <Typography label='3.45K likes' variant='caption' />
     </Grid>
     <Grid item container alignItems='center' gap='10px' xs='auto' ml='34px'>
      <Icon iconName='mode_comment_none' className='cursor--pointer' />
      <Typography label='3.45K likes' variant='caption' />
     </Grid>
     <Grid item container alignItems='center' gap='10px' xs='auto' ml='34px'>
      <Icon iconName='shared' className='cursor--pointer' />
      <Typography label='3.45K likes' variant='caption' />
     </Grid>
     <Grid item container justifyContent='end' xs={6.9}>
      <Menu
       id="demo-positioned-menu"
       aria-labelledby="demo-positioned-button"
       anchorEl={anchorEl}
       open={open}
       onClose={handleClose}
       anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
       }}
       transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
       }}
      >
       <MenuItem onClick={handleClose}>Save post</MenuItem>
       <MenuItem onClick={handleClose}>Mute this author</MenuItem>
       <MenuItem onClick={handleClose}>Report</MenuItem>
      </Menu>
      <Button click={handleClick} startIcon={<Icon iconName='more_horiz' className='cursor--pointer' />} />
     </Grid>
    </Grid>
   </Grid>
  </Grid>
 );
}

export default PreviewCard;
