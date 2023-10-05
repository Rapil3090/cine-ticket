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
exports.ReservationRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ReservationRepository = class ReservationRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAllReservation() {
        return this.prisma.reservation.findMany({});
    }
    async findByReservationId(request) {
        return await this.prisma.reservation.findUnique({
            where: {
                id: request.id,
            },
            include: {
                user: true,
                movie: true,
            },
        });
    }
    async createReservation(request) {
        const dateTime = new Date().toISOString();
        return await this.prisma.reservation.create({
            data: {
                userId: request.userId,
                movieId: request.movieId,
                reservationDate: request.reservationDate,
            },
        });
    }
    async deleteReservation(id) {
        await this.prisma.reservation.delete({
            where: { id },
        });
    }
    async updateReservation(request) {
        return await this.prisma.reservation.update({
            where: { id: request.id },
            data: {
                userId: request.userId,
                movieId: request.movieId,
                reservationDate: request.reservationDate,
            },
        });
    }
};
exports.ReservationRepository = ReservationRepository;
exports.ReservationRepository = ReservationRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReservationRepository);
//# sourceMappingURL=reservation.repository.js.map