import { Grid, Menu, MenuItem } from '@mui/material';
import Icon from '@/shared/component/icon/icon';
import Typography from '@/shared/component/typography/typography';
import Button from '@/shared/component/button/button.component';
import { useState } from 'react';
import { useCreateArticleLikeMutation, useDestroyArticleLikeMutation } from '@/app/services/api/article.slice';
import { PreviewFooterProps } from '@/shared/component/preview-card/model/preview.model';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

function PreviewFooter (props: PreviewFooterProps  ){
 const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
 const [liked, setLike] = useState<boolean>(props.liked_by_current_user);
 const [likeCount, setLikeCount] = useState<number>(props.like_count);
 const [likeArticle] = useCreateArticleLikeMutation();
 const [dislikeArticle] = useDestroyArticleLikeMutation();
 const route = useRouter();
 const open = Boolean(!!anchorEl);
 const user = getCookie('authenticated');
 const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  !user && route.push('/login');
  setAnchorEl(event.currentTarget);
 };
 const handleClose = () => {
  setAnchorEl(null);
 };
 const likeAction = (id: number) => {
  const data = {
   like: {
    likable_id: id,
    likable_type: 'Article'
   }
  };
  if ( user ) {
   if ( liked ) {
    dislikeArticle(data);
   } else {
    likeArticle(data);
   }
   setLike(!liked);
   setLikeCount( !liked ? likeCount+1 : likeCount-1);
  } else {
   route.push('/login');
  }
 };

 return(
  <>
   <Grid item container xs={6}>
    <Grid item container alignItems='center' gap='10px' xs='auto'>
     <Icon iconName={ liked ? 'favorite' : 'favorite_outlined'} color={liked? '#0079A2' : ''}
      className='cursor--pointer' click={() => likeAction(props.article_id)} />
     <Typography label={likeCount} variant='caption' />
    </Grid>
    <Grid item container alignItems='center' gap='10px' xs='auto' ml='34px'>
     <Icon iconName='comment_none' className='cursor--pointer' />
     <Typography label={props?.comment_count} variant='caption' />
    </Grid>
    <Grid item container alignItems='center' gap='10px' xs='auto' ml='34px'>
     <Icon iconName='share' className='cursor--pointer' />
    </Grid>
   </Grid>
   <Grid item container justifyContent='end' xs={6}>
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
  </>
 );
}

export default PreviewFooter;
