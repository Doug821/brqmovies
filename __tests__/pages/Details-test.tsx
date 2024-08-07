import { render, waitFor } from '@testing-library/react-native';

import { useMovies } from '@/contexts/movies';

import Details from '@/app/(app)';

jest.mock('@/contexts/movies', () => ({
  useMovies: jest.fn(),
}));

describe('Details Page', () => {
  const mockSelectedMovie = {
    id: 1,
    poster_path: '/path/to/poster.jpg',
    title: 'Mock Movie',
    overview: 'This is a mock movie overview.',
    vote_average: 7.8,
    popularity: 123.45,
    release_date: '2024-08-07',
    original_language: 'en',
  };

  beforeEach(() => {
    (useMovies as jest.Mock).mockReturnValue({
      selectedMovie: mockSelectedMovie,
    });
  });

  it('should render correctly with selected movie', () => {
    const { getByText, getByTestId } = render(<Details />);

    waitFor(() => {
      expect(getByTestId('movie-image')).toHaveProperty('source', {
        uri: `https://image.tmdb.org/t/p/w500${mockSelectedMovie.poster_path}`,
      });

      expect(getByText(mockSelectedMovie.title)).toBeTruthy();
      expect(getByText('SINOPSE')).toBeTruthy();
      expect(getByText(mockSelectedMovie.overview)).toBeTruthy();
      expect(getByText('MÉDIA')).toBeTruthy();
      expect(getByText(mockSelectedMovie.vote_average.toString())).toBeTruthy();
      expect(getByText('POPULARIDADE')).toBeTruthy();
      expect(getByText(mockSelectedMovie.popularity.toFixed())).toBeTruthy();
      expect(getByText('LANÇAMENTO')).toBeTruthy();
      expect(getByText('07/08/2024')).toBeTruthy();
      expect(getByText('IDIOMA ORIGINAL')).toBeTruthy();
      expect(
        getByText(mockSelectedMovie.original_language.toUpperCase())
      ).toBeTruthy();
    });
  });
});
