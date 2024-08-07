import { Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Moovie } from '@/@types/moovie';

import { styles } from './styles';

interface MoovieCardProps extends TouchableOpacityProps {
  moovie: Moovie;
  index: number;
}

export const MoovieCard: React.FC<MoovieCardProps> = (props) => {
  const margin = props.index % 2 === 0 ? { marginRight: 8 } : { marginLeft: 8 };

  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, margin, props.style]}
    >
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${props.moovie.poster_path}`,
        }}
        style={{
          width: '100%',
          height: 228,
        }}
      />
    </TouchableOpacity>
  );
};
