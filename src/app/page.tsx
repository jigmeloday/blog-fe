'use client';
import Header from '@/shared/component/header/header';
import { Box, Grid } from '@mui/material';
import { SubHeader } from '@/shared/component/header/style/header.style';
import Button from '@/shared/component/button/button.component';
import Icon from '@/shared/component/icon/icon';
import { FILTER_CHIP } from '@/shared/component/header/constant/header.constant';

export default function Home () {

 return (
  <Grid container>
   <Header/>
   <Grid item container px='80px' my='24px'>
    <SubHeader item container direction='row' py='8px' alignItems='center'>
     <Button label='New Post' startIcon={<Icon iconName='add' color='primary.main' />} />
     <Grid items container ml='80px' xs='auto'>
      {
       FILTER_CHIP.map(({ label, value }, index) => (
        <Box px='24px' ml={index ? '16px': '0'} key={value} className='cursor--pointer'>
         {label}
        </Box>
       ))
      }
     </Grid>
    </SubHeader>
   </Grid>
  </Grid>
 );
}
