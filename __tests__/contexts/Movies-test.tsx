import { act, fireEvent, render } from '@testing-library/react-native';
import { Button, Text } from 'react-native';

import { MoviesProvider, useMovies } from '@/contexts/movies';
import { getMovies } from '@/services';

jest.mock('@/services', () => ({
  getMovies: jest.fn(),
}));

const mockMovies = [
  { id: 1, title: 'Movie 1', poster_path: '/poster1.jpg' },
  { id: 2, title: 'Movie 2', poster_path: '/poster2.jpg' },
];

const MockComponent = () => {
  const { movies, selectedMovie, setSelectedMovie } = useMovies();

  return (
    <>
      <Text testID='movies'>{JSON.stringify(movies)}</Text>
      <Text testID='selectedMovie'>{JSON.stringify(selectedMovie)}</Text>
      <Button
        title='Set Selected Movie'
        testID='setSelectedMovie'
        onPress={() => setSelectedMovie(1)}
      />
    </>
  );
};

describe('MoviesProvider', () => {
  beforeEach(() => {
    (getMovies as jest.Mock).mockClear();
  });

  it('should fetch and set movies correctly', async () => {
    (getMovies as jest.Mock).mockResolvedValue(mockMovies);

    const { getByTestId } = render(
      <MoviesProvider>
        <MockComponent />
      </MoviesProvider>
    );

    await act(async () => {});

    expect(getMovies).toHaveBeenCalled();
    expect(getByTestId('movies').children[0]).toBe(JSON.stringify(mockMovies));
  });

  it('should set the selected movie correctly', async () => {
    (getMovies as jest.Mock).mockResolvedValue(mockMovies);

    const { getByTestId } = render(
      <MoviesProvider>
        <MockComponent />
      </MoviesProvider>
    );

    await act(async () => {});

    await act(async () => {
      fireEvent.press(getByTestId('setSelectedMovie'));
    });

    expect(getByTestId('selectedMovie').children[0]).toBe(
      JSON.stringify(mockMovies[0])
    );
  });
});
