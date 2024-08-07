import { Circle, Path, Rect, Svg } from 'react-native-svg';

import { IconProps } from '@/@types/icon';

export const Calendar: React.FC<IconProps> = (props) => {
  return (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
      <Circle
        opacity='0.8'
        cx='12'
        cy='12'
        r='12'
        fill={props.backgroundColor ?? '#16171B'}
      />
      <Rect
        x='6.1665'
        y='6.75'
        width='11.6667'
        height='11.0833'
        rx='3'
        stroke={props.color ?? '#EC8B00'}
      />
      <Path
        d='M9.0835 5.58325V6.74992'
        stroke={props.color ?? '#EC8B00'}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M14.9165 5.58325V6.74992'
        stroke={props.color ?? '#EC8B00'}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M6.1665 9.66675H17.8332'
        stroke={props.color ?? '#EC8B00'}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M8.7915 12.5833H9.37484'
        stroke={props.color ?? '#EC8B00'}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M11.7085 12.5833H12.2918'
        stroke={props.color ?? '#EC8B00'}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M14.625 12.5833H15.2083'
        stroke={props.color ?? '#EC8B00'}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M8.7915 14.9167H9.37484'
        stroke={props.color ?? '#EC8B00'}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M11.7085 14.9167H12.2918'
        stroke={props.color ?? '#EC8B00'}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M14.625 14.9167H15.2083'
        stroke={props.color ?? '#EC8B00'}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  );
};
