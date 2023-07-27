import { styled } from '@mui/system';
import { Grid } from '@mui/material';

export const CustomHeader = styled(Grid)(
 ({}) => `
   padding: 14px 80px;
   width: 100%;
   box-shadow: 0px 2px 4px 0px rgba(138, 193, 212, 0.24);
 `
);

export const LogoContainer = styled(Grid)(
 ({}) => `
    padding:10px;
    border-radius: 26px;
    border: 1px solid black;
 `);
