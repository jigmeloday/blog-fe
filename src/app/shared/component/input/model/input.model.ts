import { OutlinedInputProps, SxProps } from '@mui/material';
import { Theme } from '@mui/system';

export interface InputProps{
    InputProps?: Partial<OutlinedInputProps>;
    label?: string;
    name: string
    placeholder?: string;
    variant?: MatInputVariants;
    className?: string;
    type?: string;
    value?: string;
    onChange?: any;
    onBlur?: any
    dataCy?: string;
    error?: boolean;
    helperText?: string;
    sx?: SxProps<Theme>;
    required?: boolean;
}
export type MatInputVariants = 'filled' | 'outlined' | 'standard';
