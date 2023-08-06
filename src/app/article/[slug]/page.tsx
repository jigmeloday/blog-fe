'use client';
import { useGetArticleByIDQuery } from '@/app/services/api/article.slice';
import { Grid } from '@mui/material';
import Typography from '@/shared/component/typography/typography';

export default function ArticleDetail (props: { params: { slug: string } }) {
 const {data} = useGetArticleByIDQuery(props.params.slug);
 return(
  <Grid container>
   <Typography label={data?.title} variant='body1' />
   <Typography label={data?.body} variant='body1' />
  </Grid>
 );
}
