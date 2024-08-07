import { getMovieImageUri, getMovies } from '@/services';

global.fetch = jest.fn();

const mockMoviesResponse = {
  page: 1,
  results: [
    { id: 1, title: 'Movie 1', poster_path: '/path1.jpg' },
    { id: 2, title: 'Movie 2', poster_path: '/path2.jpg' },
  ],
  total_pages: 1,
  total_results: 2,
};

describe('Movies Service', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it('should fetch movies successfully', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockMoviesResponse),
    });

    const movies = await getMovies();

    expect(fetch).toHaveBeenCalledWith(
      'https://api.themoviedb.org/3/discover/movie?language=pt-BR&page=1',
      expect.objectContaining({
        method: 'GET',
        headers: expect.objectContaining({
          accept: 'application/json',
          Authorization: `Bearer ${process.env.EXPO_PUBLIC_ACCESS_TOKEN}`,
        }),
      })
    );
    expect(movies).toEqual(mockMoviesResponse.results);
  });

  it('should handle errors while fetching movies', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Fetch error'));

    const movies = await getMovies();

    expect(fetch).toHaveBeenCalledWith(
      'https://api.themoviedb.org/3/discover/movie?language=pt-BR&page=1',
      expect.objectContaining({
        method: 'GET',
        headers: expect.objectContaining({
          accept: 'application/json',
          Authorization: `Bearer ${process.env.EXPO_PUBLIC_ACCESS_TOKEN}`,
        }),
      })
    );
    expect(movies).toBeUndefined();
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Error fetching movies',
      expect.any(Error)
    );

    consoleErrorSpy.mockRestore();
  });

  it('should return correct movie image URI', () => {
    const path = '/test.jpg';
    const uri = getMovieImageUri(path);

    expect(uri).toBe(`https://image.tmdb.org/t/p/w500${path}`);
  });
});
