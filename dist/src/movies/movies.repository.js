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
exports.MovieRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MovieRepository = class MovieRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAllMovies() {
        return this.prisma.movie.findMany({});
    }
    async findById(request) {
        return this.prisma.movie.findUnique({
            where: {
                id: request.id,
            },
        });
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
    async deleteMovies(id) {
        await this.prisma.movie.delete({
            where: { id },
        });
    }
    async updateMovies(request) {
        return await this.prisma.movie.update({
            where: { id: request.id },
            data: {
                title: request.title,
                description: request.description,
                status: request.status
            },
        });
    }
};
exports.MovieRepository = MovieRepository;
exports.MovieRepository = MovieRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MovieRepository);
//# sourceMappingURL=movies.repository.js.map