'use client';
import { Grid } from '@mui/material';
import Input from '@/app/shared/component/input/input.component';
import Button from '@/app/shared/component/button/button.component';

export default function Home () {
 return (
  <Grid py='120px'>
   <Input name={'hello'} placeholder='hello' label='Hello' variant='outlined' />
   <Button label='HELLO' variant='contained' />
   <Button label='outlined' variant='outlined' />
  </Grid>
 );
}
