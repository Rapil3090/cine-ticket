import { PrismaService } from "src/prisma/prisma.service";
import { CreateMovieRequest, UpdateMovieRequest } from "./dto/movie.dto";
export declare class MovieRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllMovies(): Promise<{
        id: number;
        title: string;
        description: string;
        status: string;
    }[]>;
    findById(id: number): Promise<{
        id: number;
        title: string;
        description: string;
        status: string;
    }>;
    createMovies(request: CreateMovieRequest): Promise<{
        id: number;
        title: string;
        description: string;
        status: string;
    }>;
    deleteMovies(id: number): Promise<void>;
    updateMovies(request: UpdateMovieRequest): Promise<{
        id: number;
        title: string;
        description: string;
        status: string;
    }>;
}
