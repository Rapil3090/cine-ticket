import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { GetMovieRequest } from "./dto/get-movie.request";
import { CreateMovieRequest } from "./dto/create-movie.request";
import { UpdateMovieRequest } from "./dto/update-movie.request";

@Injectable()
export class MovieRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAllMovies() {
    return this.prisma.movie.findMany({});
  }

  async findById(request: GetMovieRequest) {
    return this.prisma.movie.findUnique({
      where: {
        id: request.id,
      },
    });
  }

  async createMovies(request: CreateMovieRequest) {
    return await this.prisma.movie.create({
        data: {
            title: request.title,
            description: request.description,
            status: request.status,
        },
    });
  }

  async deleteMovies(id: number) {
    await this.prisma.movie.delete({
      where: { id },
    });
  }

  async updateMovies(request: UpdateMovieRequest) {
    return await this.prisma.movie.update({
      where: { id: request.id},
      data: {
        title: request.title,
        description: request.description,
        status: request.status
      }
    }
    )
  }


}
