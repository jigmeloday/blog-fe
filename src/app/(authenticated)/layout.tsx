import { Grid } from '@mui/material';
import Header from '@/shared/component/header/header';


export default function RootLayout ({ children, }: {
    children: React.ReactNode
}) {
 return (
  <Grid container item>
   <Header/>
   <Grid item container>
    {children}
   </Grid>
  </Grid>
 );
}
