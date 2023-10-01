import { MovieRepository } from "./movies.repository";
import { CreateMovieRequest } from "./dto/create-movie.request";
import { UpdateMovieRequest } from "./dto/update-movie.request";
export declare class MoviesService {
    private readonly movieRepository;
    constructor(movieRepository: MovieRepository);
    getMovies(): Promise<{
        id: number;
        title: string;
        description: string;
        status: string;
    }[]>;
    createMovies(request: CreateMovieRequest): Promise<{
        id: number;
        title: string;
        description: string;
        status: string;
    }>;
    getMoviesById(id: number): Promise<{
        id: number;
        title: string;
        description: string;
        status: string;
    }>;
    deleteMovies(id: number): Promise<void>;
    updateMoviesStatus(request: UpdateMovieRequest): Promise<{
        id: number;
        title: string;
        description: string;
        status: string;
    }>;
}
