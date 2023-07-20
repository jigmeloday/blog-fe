import { styled } from '@mui/system';
import { Grid } from '@mui/material';

export const RightSide = styled(Grid)(
 ({}) => `
    height: 100vh;
    border: 1px solid black;
    `
);

export const LeftSide = styled(Grid)(
 ({}) => `
    height: 100vh;
    border: 1px solid black;
    `
);

export const FormContainer = styled(Grid)(
 ({}) => `
    position: absolute;
 `);
