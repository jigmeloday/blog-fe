import { MatColors } from '@/shared/model/common.model';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

export interface IconProps {
    iconName?: string;
    color?: MatColors | string;
    className?: string;
    sx?: SxProps<Theme>;
    disabled?: boolean;
    click?: () => void;
}
