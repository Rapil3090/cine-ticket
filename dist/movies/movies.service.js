"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
const movies_repository_1 = require("./movies.repository");
const prisma_service_1 = require("../prisma/prisma.service");
let MoviesService = class MoviesService {
    constructor(movieRepository, prisma) {
        this.movieRepository = movieRepository;
        this.prisma = prisma;
    }
    async getMovies() {
        return await this.movieRepository.findAllMovies();
    }
    async createMovies(request) {
        return await this.prisma.movie.create({
            data: {
                title: request.title,
                description: request.description,
                status: request.status,
            },
        });
    }
    async getMoviesById(id) {
        return await this.movieRepository.findById({ id });
    }
    async deleteMovies(id) {
        await this.prisma.movie.delete({
            where: { id },
        });
    }
    async updateMoviesStatus(request) {
        const movies = await this.getMoviesById(request.id);
        if (!movies) {
            throw new common_1.NotFoundException("영화가 존재하지 않습니다");
        }
        return await this.prisma.movie.update({
            where: { id: request.id },
            data: {
                title: request.title,
                description: request.description,
                status: request.status,
            },
        });
    }
};
exports.MoviesService = MoviesService;
exports.MoviesService = MoviesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [movies_repository_1.MovieRepository,
        prisma_service_1.PrismaService])
], MoviesService);
//# sourceMappingURL=movies.service.js.map