import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateReservationRequest, GetReservationRequest, UpdateReservationRequest } from "./dto/reservation.request";

@Injectable()
export class ReservationRepository {
    constructor(private readonly prisma: PrismaService) {}


    async findAllReservation() {
        return this.prisma.reservation.findMany({});
    }

    async findByReservationId(request: GetReservationRequest) {
        return await this.prisma.reservation.findUnique({
            where: {
                id: request.id,
            },
        });
    }

    async createReservation(request: CreateReservationRequest) {
        
        const dateTime = new Date().toISOString();
        
        return await this.prisma.reservation.create({
            data: {
                userId: request.userId,
                movieId: request.movieId,
                reservationDate: request.reservationDate,
            },
        });
    }

    async deleteReservation(id: number) {
        await this.prisma.reservation.delete({
            where: { id },
        });
    }

    async updateReservation(request: UpdateReservationRequest) {
        return await this.prisma.reservation.update({
            where: { id: request.id},
            data: {
                userId: request.userId,
                movieId: request.movieId,
                reservationDate: request.reservationDate,
            },
        });
    }

}