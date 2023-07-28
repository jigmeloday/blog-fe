import { styled } from '@mui/system';
import { Box, Grid, TextField } from '@mui/material';

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

export const CustomSearch = styled(TextField)(
 ({}) => `
  & .MuiInputBase-root{
    height: 45px;
    width: 300px;
    border-radius: 66px;
  }
`);

export const ProfileContainer = styled(Box)(
 ({theme}) => `
    height: 42px;
    width: 42px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border-radius: 46px;
    border: 3px solid ${theme.palette.primary.main};
` );
