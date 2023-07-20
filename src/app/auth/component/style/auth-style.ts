import { styled } from '@mui/system';
import { Grid } from '@mui/material';

export const Background = styled(Grid)(
 ({...props}) => `
    height: 100vh;
    background: ${props.background};
 `);

export const FormContainer = styled(Grid)(
 ({theme}) => `
    position: absolute;
    left: 60%;
    top: 50%;
    padding: 32px;
    background: ${theme.palette.white.main};
    border-radius: 8px;
    box-shadow: 0px 2px 4px 0px rgba(138, 193, 212, 0.24);
 `);
