import { SvgProps } from 'react-native-svg';

export interface IconProps extends SvgProps {
    color?: string;
    backgroundColor?: string;
    withFill?: boolean;
}
