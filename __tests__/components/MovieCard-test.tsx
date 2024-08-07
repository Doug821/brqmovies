import { Movie } from '@/@types/movie';
import { MovieCard } from '@/components';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

const movie: Movie = {
  poster_path: '/path/to/poster.jpg',
  id: 0,
  title: 'Title',
  overview: 'Overview',
  release_date: '2021-01-01',
  vote_average: 0,
  vote_count: 0,
  popularity: 0,
  original_language: 'en',
};

describe('MovieCard', () => {
  it('should render the MovieCard component', () => {
    const { getByTestId } = render(<MovieCard movie={movie} index={0} />);

    const image = getByTestId('movie-image');
    expect(image.props.source.uri).toBe(
      'https://image.tmdb.org/t/p/w500/path/to/poster.jpg'
    );
  });

  it('should handle press events', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <MovieCard movie={movie} index={0} onPress={onPressMock} />
    );

    fireEvent.press(getByTestId('movie-card'));

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
