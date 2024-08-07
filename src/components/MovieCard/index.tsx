import { Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Movie } from '@/@types/movie';
import { styles } from './styles';

interface MovieCardProps extends TouchableOpacityProps {
  movie: Movie;
  index: number;
}

export const MovieCard: React.FC<MovieCardProps> = (props) => {
  const margin = props.index % 2 === 0 ? { marginRight: 8 } : { marginLeft: 8 };

  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, margin, props.style]}
    >
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`,
        }}
        style={{
          width: '100%',
          height: 228,
        }}
      />
    </TouchableOpacity>
  );
};
