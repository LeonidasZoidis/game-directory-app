import useFetch from './useFetch';
import { Genre } from '../types/global';

export function useGenres() {
    return useFetch<{ results: Genre[] }>({
        url: `https://api.rawg.io/api/genres?key=${
            import.meta.env.VITE_RAWG_API_KEY
        }`,
    });
}
