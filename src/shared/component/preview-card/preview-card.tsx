import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import img from '../../../../public/profile/profile.png';
import { ProfileImage } from '@/shared/component/preview-card/style/preview.style';
import Typography from '@/shared/component/typography/typography';
import PreviewFooter from '@/shared/component/preview-card/preview-footer';
import { ArticleData } from '@/shared/model/common.model';
import { dateFormat } from '@/shared/utils/utilities';
import { useRouter } from 'next/navigation';

function PreviewCard (props: { article: ArticleData }) {
 const route = useRouter();
 return(
  <Grid item container direction='row' py='24px' borderBottom='1px solid var(--primary-blue-50, #E6F2F6)' mb='44px'>
   <Grid item container xs={12}>
    <Grid item container direction='row'>
     <ProfileImage>
      <Image src={img} alt='profile' height={60} width={40} />
     </ProfileImage>
     <Grid item container xs={8} ml='12px' direction='column'>
      <Grid item container direction='row' alignItems='center'>
       <Typography label={props?.article?.owner?.name} variant='body1' fontSize='16px' fontWeight='400' />
       { props.article.following && <Grid item container pl='12px' direction='row' xs='auto'>
        <Typography label='-' variant='body1' fontSize='12px' fontWeight='300'/>
        <Box ml='4px'>
         <Typography label={ 'following' } variant='body1' fontSize='12px' fontWeight='300'/>
        </Box>
       </Grid> }
      </Grid>
      <Typography label={dateFormat(props.article.created_at)} variant='caption' fontSize='12px' fontWeight='300' />
     </Grid>
    </Grid>
    <Grid item container my='24px' direction='column'>
     <Typography label={props?.article?.title} variant='body' fontSize='24px' fontWeight='600' />
     <Box my='12px' fontSize='16px' fontWeight='300' lineHeight='24px'>
      {props?.article?.body}
     </Box>
     <Typography click={() => route.push(`/article/${props.article.id}`) }
      label='Read More' variant='body1' 
      fontSize='16px' className='cursor--pointer' fontWeight='500' />
    </Grid>
    <Grid item container direction='row' alignItems='center' xs={12}>
     <PreviewFooter comment_count={props.article.comment_count}
      like_count={props.article.like_count} article_id={props.article.id}
      liked_by_current_user={props.article.liked_by_current_user} />
    </Grid>
   </Grid>
  </Grid>
 );
}

export default PreviewCard;
