import { Movie } from "@/@types/movie";

interface MoviesResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

const ACCESS_TOKEN = process.env.EXPO_PUBLIC_ACCESS_TOKEN;

export const getMovies = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ACCESS_TOKEN}`,
        }
    };

    try {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?language=pt-BR&page=1', options);

        const data: MoviesResponse = await response.json();

        return data.results;
    } catch (error) {
        console.error('Error fetching movies', error);
    }
}

export const getMovieImageUri = (path: string) => {
    return `https://image.tmdb.org/t/p/w500${path}`;
} 
