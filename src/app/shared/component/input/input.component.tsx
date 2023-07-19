import { InputProps } from '@/app/shared/component/input/model/input.model';
import { Grid, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomInput = styled( TextField )(
 ( {  } ) => `
  &.custom--input {
      .MuiOutlinedInput {
        &-notchedOutline {
          border: unset;
       }

        &-root {
          height: 2.5rem;
        }
      }
   }

  &.white--input {
     .MuiInputLabel-root {
       color: white;
     }

      .MuiOutlinedInput {
        &-notchedOutline {
          border-color: white;
        }
      }
   }
  `
);

function Input (props: InputProps) {
 const { placeholder, 
  InputProps, 
  name, className,
  label,
  onChange,
  value, 
  variant,
  error, 
  sx,
  helperText,
  required, 
  onBlur, 
  type
 } = props;
 return(
  <Grid>
   <CustomInput
    fullWidth
    className={className as string}
    name={name}
    onBlur={onBlur}
    variant={variant as any}
    placeholder={placeholder as string}
    label={label}
    InputProps={InputProps as any}
    type={type}
    value={value}
    onChange={onChange}
    helperText={helperText}
    error={error as boolean}
    sx={sx as any}
    required={required as boolean}
   />
  </Grid>
 );
}

export default Input;
