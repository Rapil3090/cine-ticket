import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UsePipes,
    ValidationPipe,
  } from "@nestjs/common";
  import { MoviesService } from "./movies.service";
import { CreateMovieRequest, GetMovieRequest, UpdateMovieRequest } from "./dto/movie.dto";




  
  @Controller("movies")
  export class MoviesController {
    constructor(private moviesService: MoviesService) {}
  
    @Get()
    async getAllMovies() {
      return this.moviesService.getMovies();
    }
  
    @Post()
    @UsePipes(ValidationPipe)
    createMovies(@Body() request: CreateMovieRequest) {
      return this.moviesService.createMovies(request);
    }
  
    @Get(":id")
    async getMoviesById(@Param("id") id: string) {
      const movieId = parseInt(id, 10);
      const request: GetMovieRequest = { id: movieId };
      return await this.moviesService.getMoviesById(movieId);
    }
  
    @Delete(":id")
    async deleteMovies(@Param("id") id: string): Promise<void> {
      const numberId = parseInt(id, 10);
      await this.moviesService.deleteMovies(numberId);
    }
  
    @Patch("/update")
    updateMoviesStatus(@Body() request: UpdateMovieRequest) {
      return this.moviesService.updateMoviesStatus(request);
    }
  }
  