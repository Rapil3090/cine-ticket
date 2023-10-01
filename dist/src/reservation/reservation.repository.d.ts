import { PrismaService } from "src/prisma/prisma.service";
import { CreateReservationRequest, GetReservationRequest, UpdateReservationRequest } from "./dto/reservation.request";
export declare class ReservationRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllReservation(): Promise<{
        id: number;
        userId: number;
        movieId: number;
        reservationDate: Date;
    }[]>;
    findByReservationId(request: GetReservationRequest): Promise<{
        id: number;
        userId: number;
        movieId: number;
        reservationDate: Date;
    }>;
    createReservation(request: CreateReservationRequest): Promise<{
        id: number;
        userId: number;
        movieId: number;
        reservationDate: Date;
    }>;
    deleteReservation(id: number): Promise<void>;
    updateReservation(request: UpdateReservationRequest): Promise<{
        id: number;
        userId: number;
        movieId: number;
        reservationDate: Date;
    }>;
}
