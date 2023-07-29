import { Grid, Menu, MenuItem } from '@mui/material';
import Icon from '@/shared/component/icon/icon';
import Typography from '@/shared/component/typography/typography';
import Button from '@/shared/component/button/button.component';
import { useState } from 'react';

function PreviewFooter (props: { comment_count: number, like_count: number, liked_by_current_user: boolean } ){
 const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
 const [liked, setLike] = useState<boolean>(props.liked_by_current_user);
 const open = Boolean(!!anchorEl);
 const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
 };
 const handleClose = () => {
  setAnchorEl(null);
 };
 return(
  <>
   <Grid item container xs={6}>
    <Grid item container alignItems='center' gap='10px' xs='auto'>
     <Icon iconName={liked? 'favorite' : 'favorite_outlined'}
      className='cursor--pointer' click={() => setLike(!liked)} />
     <Typography label={props?.like_count} variant='caption' />
    </Grid>
    <Grid item container alignItems='center' gap='10px' xs='auto' ml='34px'>
     <Icon iconName='mode_comment_none' className='cursor--pointer' />
     <Typography label={props?.comment_count} variant='caption' />
    </Grid>
    <Grid item container alignItems='center' gap='10px' xs='auto' ml='34px'>
     <Icon iconName='shared' className='cursor--pointer' />
     <Typography label='3.45K shares' variant='caption' />
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
