import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import {  MoviesService } from './movies.service';
import { GetMovieRequest } from './dto/get-movie.request';
import { Movie } from './movies.model';
import { Status } from '@prisma/client';

@Controller('movies')
export class MoviesController {
    constructor(private moviesService: MoviesService) {}

    @Get()
    async getAllMovies() {
        return this.moviesService.getMovies();
    }

    @Post()
    @UsePipes(ValidationPipe)
    createMovies(
        @Body('title') title: string,
        @Body('description') description: string )
             {
        return this.moviesService.createMovies(title, description);
    }

    @Get(':id')
        async getMoviesById(@Param('id') id: string) {

            const numberId = parseInt(id, 10)
            const request: GetMovieRequest = { id: numberId};
        return await this.moviesService.getMoviesById(numberId);
    }

    @Delete(':id')
    async deleteMovies(@Param('id') id: string): Promise<void> {
        // const request = {id};
        const numberId = parseInt(id, 10);
        await this.moviesService.deleteMovies(numberId);
        
    }

    @Patch('/update/:id')
    updateMoviesStatus(
        @Param('id') id: number,
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('status') status: Status,
    ) {
        return this.moviesService.updateMoviesStatus(id, title, description , status);
    }


 }
