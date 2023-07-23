import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { DropdownProps } from '@/app/shared/component/dropdown/drop-down/drop-down.model';

export function Dropdown ( props: DropdownProps ) {

 return (
  <FormControl fullWidth>
   <InputLabel>{props?.label}</InputLabel>
   <Select label={props?.label}>
    {props.value.map( data =>
     <MenuItem key={data} value={ data }>{ data }</MenuItem>
    )}
   </Select>
  </FormControl>
 );
}

export default Dropdown;
