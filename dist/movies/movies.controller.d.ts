import { MoviesService } from './movies.service';
import { Status } from '@prisma/client';
export declare class MoviesController {
    private moviesService;
    constructor(moviesService: MoviesService);
    getAllMovies(): Promise<{
        id: number;
        title: string;
        description: string;
        status: import(".prisma/client").$Enums.Status;
    }[]>;
    createMovies(title: string, description: string): Promise<{
        id: number;
        title: string;
        description: string;
        status: import(".prisma/client").$Enums.Status;
    }>;
    getMoviesById(id: string): Promise<{
        id: number;
        title: string;
        description: string;
        status: import(".prisma/client").$Enums.Status;
    }>;
    deleteMovies(id: string): Promise<void>;
    updateMoviesStatus(id: number, title: string, description: string, status: Status): Promise<any>;
}
