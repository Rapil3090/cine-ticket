import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { GetMovieRequest } from "./dto/get-movie.request";

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
}
