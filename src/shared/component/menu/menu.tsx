import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { DropdownProps } from '@/shared/component/menu/drop-down/drop-down.model';

export function Menu ( props: DropdownProps ) {

 return (
  <FormControl fullWidth>
   <InputLabel>{props?.label}</InputLabel>
   <Select label={props?.label}
    name={props.name}
    value={props.values || ''}
    onChange={props.handleChange}
   >
    {props.value.map( data =>
     <MenuItem key={data} value={ data }>{ data }</MenuItem>
    )}
   </Select>
  </FormControl>
 );
}

export default Menu;
