'use client';
import Header from '@/shared/component/header/header';
import { Box, Grid } from '@mui/material';
import { SubHeader } from '@/shared/component/header/style/header.style';
import Button from '@/shared/component/button/button.component';
import Icon from '@/shared/component/icon/icon';
import { FILTER_CHIP } from '@/shared/component/header/constant/header.constant';
import { useState } from 'react';
import PreviewCard from '@/shared/component/preview-card/preview-card';
import { useGetArticleByIDQuery } from '@/app/services/api/article.slice';
import { ArticleData } from '@/shared/model/common.model';
import PopularOtters from '@/shared/component/home-side-items/popular-otters/popular-otters';
import Typography from '@/shared/component/typography/typography';
import { DUMMY_DATA } from '@/shared/constant/shared.constant';
import { theme } from '../../styles/theme';

export default function Home () {
 const [active, setActive] = useState('all');
 const {data} = useGetArticleByIDQuery<ArticleData[]>();
 return (
  <Grid container>
   <Header/>
   <Grid item container px='80px' my='24px'>
    <SubHeader item container direction='row' py='8px' alignItems='center'>
     <Button label='New Post' startIcon={<Icon iconName='add' color='primary.main' />} />
     <Grid item container ml='80px' xs='auto'>
      {
       FILTER_CHIP.map(({ label, value }, index) => (
        <Box
         onClick={() => setActive(value)}
         color={active === value ? 'primary.main': ''}
         px='24px' ml={index ? '16px': '0'}
         key={value} className='cursor--pointer'>
         {label}
        </Box>
       ))
      }
     </Grid>
    </SubHeader>
   </Grid>
   <Grid item container direction='row' px='80px' gap='20px'>
    <Grid item container xs={8.5}>
     {
      data?.map((items: ArticleData) => <PreviewCard key={items.id} article={items} />)
     }
    </Grid>
    <Grid item container xs={3.3} className='height--fit-content'>
     {
      DUMMY_DATA.map(({ id, title, data }, index) => (
       <Grid item container key={id} direction='column' borderBottom={`1px solid ${theme.palette.primary.light}`}>
        <Box mb='32px' mt={index ? '32px' : '0px'}>
         <Typography label={title} variant='body1' fontSize='20px' fontWeight='600' />
         {
          data.map((item) => <PopularOtters key={item.id} item={item} />)
         }
         <Grid item container justifyContent='end'>
          <Button label='View More'/>
         </Grid>
        </Box>
       </Grid>
      ))
     }
    </Grid>
   </Grid>
  </Grid>
 );
}
