import { Circle, Path, Svg } from 'react-native-svg';

import { IconProps } from '@/@types/icon';

export const ArrowBack: React.FC<IconProps> = (props) => {
  return (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
      <Circle
        opacity='0.8'
        cx='12'
        cy='12'
        r='12'
        fill={props.backgroundColor ?? '#16171B'}
      />
      <Path
        d='M18 11.25H8.8725L13.065 7.0575L12 6L6 12L12 18L13.0575 16.9425L8.8725 12.75H18V11.25Z'
        fill={props.color ?? '#fff'}
      />
    </Svg>
  );
};
