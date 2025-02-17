import { Circle, Path, Svg } from 'react-native-svg';

import { IconProps } from '@/@types/icon';

export const Star: React.FC<IconProps> = (props) => {
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
        d='M11.3077 6.32472C11.5644 5.70995 12.4353 5.70995 12.692 6.32472L13.8738 9.15577C13.9763 9.40146 14.2015 9.57436 14.4653 9.61007L17.6207 10.0371C18.2709 10.1251 18.5027 10.9466 17.9943 11.3614L15.5744 13.3362C15.3529 13.5169 15.2534 13.8079 15.3179 14.0864L16.0905 17.4253C16.2456 18.0954 15.492 18.6034 14.929 18.2083L12.4307 16.4548C12.1721 16.2733 11.8276 16.2733 11.569 16.4548L9.07066 18.2083C8.50763 18.6035 7.75404 18.0955 7.90911 17.4253L8.68172 14.0864C8.74616 13.8079 8.64668 13.517 8.42521 13.3362L6.00531 11.3614C5.49698 10.9466 5.72873 10.1251 6.3789 10.0372L9.53438 9.61007C9.79822 9.57436 10.0233 9.40146 10.1259 9.15577L11.3077 6.32472Z'
        stroke={props.color ?? '#EC8B00'}
        stroke-miterlimit='3.3292'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  );
};
