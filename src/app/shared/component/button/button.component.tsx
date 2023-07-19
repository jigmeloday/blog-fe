import { ButtonProps } from '@/app/shared/component/button/model/button.model';
import { SxProps, Theme } from '@mui/material';
import { Button as MatButton } from '@mui/material/';
import { styled } from '@mui/material/styles';

const CustomButton = styled(MatButton)(
 ({ theme, }) => `
  &.button--icon {
    &.MuiButtonBase-root {
      padding: 0;
      min-width: 0;
    }
   }
   &.button--black {
      background-color: ${theme.palette.black.main};
      color: ${theme.palette.white.main};
   }
   &.button-contain--white {
      background-color: ${theme.palette.white.main};
      color: ${theme.palette.primary.light};
   }
   &.Mui-disabled {
     background-color: ${theme.palette.altoGray.main};
     color: ${theme.palette.black.contrastText};
   }
  `
);

function Button (props: ButtonProps){
 return(
  <CustomButton
   color={props?.color}
   variant={props?.variant}
   onClick={props?.click}
   disabled={props?.disabled}
   className={props?.className}
   sx={props.sx as SxProps<Theme>}
   startIcon={props.startIcon}
   endIcon={props.endIcon}
   type={props?.type}
  >
   {props?.child}
   {props?.label}
  </CustomButton>
 );
}

export default Button;
