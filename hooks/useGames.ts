import useFetch from './useFetch';
import { Game } from '../types/global';

const apiKey = import.meta.env.VITE_RAWG_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

export function useGames(page: number = 1) {
    return useFetch<{ results: Game[] }>({
        url: `${apiUrl}games?key=${apiKey}&page=${page}`,
    });
}
