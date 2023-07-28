import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import img from '../../../../public/profile/profile.png';
import { ProfileImage } from '@/shared/component/preview-card/style/preview.style';
import Typography from '@/shared/component/typography/typography';

function PreviewCard () {
 return(
  <Grid item container direction='row' py='24px'>
   <Grid item container xs={8} direction='row'>
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
   <Grid item container xs={4}>
             hello
   </Grid>
  </Grid>
 );
}

export default PreviewCard;
