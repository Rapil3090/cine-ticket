import { MoviesService } from "./movies.service";
import { CreateMovieRequest, UpdateMovieRequest } from "./dto/movie.dto";
export declare class MoviesController {
    private moviesService;
    constructor(moviesService: MoviesService);
    getAllMovies(): Promise<{
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
    getMoviesById(id: string): Promise<{
        id: number;
        title: string;
        description: string;
        status: string;
    }>;
    deleteMovies(id: string): Promise<void>;
    updateMoviesStatus(request: UpdateMovieRequest): Promise<{
        id: number;
        title: string;
        description: string;
        status: string;
    }>;
}
