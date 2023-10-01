import { Injectable, NotFoundException } from "@nestjs/common";
import { MovieRepository } from "./movies.repository";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateMovieRequest } from "./dto/create-movie.request";
import { UpdateMovieRequest } from "./dto/update-movie.request";



@Injectable()
export class MoviesService {
  constructor(
    private readonly movieRepository: MovieRepository,
  ) {}

  async getMovies() {
    return await this.movieRepository.findAllMovies();
  }

  async createMovies(request: CreateMovieRequest) {
    return await this.movieRepository.createMovies(request);
  }

  async getMoviesById(id: number) {
    return await this.movieRepository.findById({ id });
  }

  async deleteMovies(id: number): Promise<void> {
    
    return await this.movieRepository.deleteMovies(id);
  }

  async updateMoviesStatus(request: UpdateMovieRequest) {
    const movies = await this.getMoviesById(request.id);

    if (!movies) {
      throw new NotFoundException("영화가 존재하지 않습니다");
    }

    return await this.movieRepository.updateMovies(request);
    
  }
}
