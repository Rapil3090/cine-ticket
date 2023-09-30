import { MovieRepository } from './movies.repository';
import { Status } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class MoviesService {
    private readonly movieRepository;
    private readonly prisma;
    constructor(movieRepository: MovieRepository, prisma: PrismaService);
    private movies;
    getMovies(): Promise<{
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
    getMoviesById(id: number): Promise<{
        id: number;
        title: string;
        description: string;
        status: import(".prisma/client").$Enums.Status;
    }>;
    deleteMovies(id: number): Promise<void>;
    updateMoviesStatus(id: number, title: string, description: string, status: Status): Promise<any>;
}
