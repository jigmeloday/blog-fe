import { SxProps, Theme } from '@mui/material';
import { MatColors, MatVariants } from '@/app/shared/model/common.model';
import { ReactNode } from 'react';

export interface ButtonProps{
    label?: string;
    sx?: SxProps<Theme>;
    child?: JSX.Element | null;
    color?: MatColors;
    variant?: MatVariants;
    disabled?: boolean;
    click?: (() => void) | any ;
    className?: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    type?: 'submit' | 'reset' | 'button';
}
