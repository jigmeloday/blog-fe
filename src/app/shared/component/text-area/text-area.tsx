import { TextareaAutosize } from '@mui/material';

/* eslint-disable-next-line */
export interface TextAreaProps {
  label?: string;
  name?: string;
  onChange?: any;
  value?: string;
  onBlur?: any;
  minRows?: number
}

export function TextArea ( props: TextAreaProps ): JSX.Element {
 return (
  <TextareaAutosize
   name={props.name}
   onChange={props.onChange}
   value={props.value}
   onBlur={props.onBlur}
   className='width--full text-area p-8'
   minRows={ props.minRows || 8 }
   placeholder={props.label}
  />
 );
}

export default TextArea;
