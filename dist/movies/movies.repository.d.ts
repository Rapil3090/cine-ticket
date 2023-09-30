import { PrismaService } from "src/prisma/prisma.service";
import { GetMovieRequest } from "./dto/get-movie.request";
export declare class MovieRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllMovies(): Promise<{
        id: number;
        title: string;
        description: string;
        status: import(".prisma/client").$Enums.Status;
    }[]>;
    findById(request: GetMovieRequest): Promise<{
        id: number;
        title: string;
        description: string;
        status: import(".prisma/client").$Enums.Status;
    }>;
}
