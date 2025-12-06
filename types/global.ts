export interface Game {
    id: number;
    slug: string;
    name: string;
    released: string;
    background_image: string;
    rating: number;
    ratings_count: number;
    metacritic?: number;
    playtime?: number;
    genres: Genre[];
    platforms: { platform: Platform }[];
}

export interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

export interface Platform {
    id: number;
    name: string;
    slug: string;
}
