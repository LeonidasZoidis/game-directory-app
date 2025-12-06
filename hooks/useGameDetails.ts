import useFetch from './useFetch';
import { Game } from '../types/global';

export function useGameDetails(id: string) {
    return useFetch<Game>({
        url: `https://api.rawg.io/api/games/${id}?key=${
            import.meta.env.VITE_RAWG_API_KEY
        }`,
    });
}
