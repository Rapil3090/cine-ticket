import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { MovieRepository } from './movies.repository'
// import { Movie, Status } from './movies.model';
import { Movie } from './movies.model';
import { Status } from '@prisma/client';
import { GetMovieRequest } from './dto/get-movie.request';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class MoviesService {
    constructor(
        private readonly movieRepository:MovieRepository,
        private readonly prisma: PrismaService
    ) {}

    private movies: Movie[ ] = [];

    async getMovies() {
        return await this.movieRepository.findAllMovies()
    }


    async createMovies(title: string, description:string)  {
        const movie = await this.prisma.movie.create({

            data: {
                title,
                description,
                status: Status.PUBLIC,
            },
        });

        return movie;
    }

    async getMoviesById(id: number) {
        return await this.movieRepository.findById({id});
    }

    async deleteMovies(id: number): Promise<void> {
        await this.prisma.movie.delete({
            where: {id},
        });
    }


    async updateMoviesStatus(id: number, title: string, description: string, status: Status): Promise<any> {
        const movies = await this.getMoviesById(id);

        if (!movies) {
            throw new NotFoundException('영화가 존재하지 않습니다');
        }

        const updatedMovie = await this.prisma.movie.update({
            where: { id },
            data: {
                title,
                description,
                status,
            },
        });
        return updatedMovie;
    }
}
