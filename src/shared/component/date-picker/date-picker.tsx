import { TextField } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePickerProps } from '@/shared/component/date-picker/model/date-picker.model';



export function DatePicker ( props: DatePickerProps ): JSX.Element {

 return (
  <LocalizationProvider dateAdapter={ AdapterDayjs }>
   <DesktopDatePicker
    className='width--full'
    label={props.label}
    inputFormat="MM/DD/YYYY"
    value={props.value}
    onChange={( newValue: any ) => {
     props.setValue( newValue );
    }}
    renderInput={ ( params ) => <TextField { ...params } /> }
   />
  </LocalizationProvider>
 );
}

export default DatePicker;
