import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react';

import { Movie } from '@/@types/movie';
import { getMovies } from '@/services';

interface MoviesContextData {
  movies: Movie[];
  selectedMovie: Movie | null;
  setSelectedMovie: (movieId: number) => void;
}

const MoviesContext = createContext<MoviesContextData | null>({
  movies: [],
  selectedMovie: null,
  setSelectedMovie: () => {},
});

export function MoviesProvider({ children }: PropsWithChildren) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSetSelectedMovie = (movieId: number) => {
    if (!movies) {
      throw new Error('No movies found in MoviesProvider');
    }

    const movie = movies.find((movie) => movie.id === movieId);

    if (!movie) {
      throw new Error('Movie not found in MoviesProvider');
    }

    setSelectedMovie(movie);
  };

  const handleGetMovies = async () => {
    const moviesResponse = getMovies();

    try {
      const response = await moviesResponse;

      if (!response) {
        throw new Error('No movies found in MoviesProvider');
      }

      setMovies(response);
    } catch (error) {
      console.error('Error fetching movies in MoviesProvider', error);
    }
  };

  useEffect(() => {
    handleGetMovies();
  }, []);

  const value = {
    movies,
    selectedMovie,
    setSelectedMovie: handleSetSelectedMovie,
  };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
}

export function useMovies() {
  const context = useContext(MoviesContext);

  if (!context) {
    throw new Error('useMovies must be used within a MoviesProvider');
  }

  return context;
}
