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
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export default function Home () {
 const [active, setActive] = useState('all');
 const {data} = useGetArticleByIDQuery<ArticleData[]>();
 const user = getCookie('authentication');
 const route = useRouter();
 return (
  <Grid container>
   <Header/>
   <Grid item container px='80px' my='24px'>
    <SubHeader item container direction='row' py='8px' alignItems='center'>
     <Button click={() => {
      !user && route.push('/login');
     }} label='New Post' startIcon={<Icon iconName='add' color='primary.main' />} />
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
   <Grid item container direction='row' px='80px'>
    <Grid item container xs={8}>
     {
      data?.map((items: ArticleData) => <PreviewCard key={items.id} article={items} />)
     }
    </Grid>
    <Grid item container xs={4}>

    </Grid>
   </Grid>
  </Grid>
 );
}
