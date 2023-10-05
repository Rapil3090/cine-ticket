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
        user: {
            id: number;
            name: string;
            email: string;
            password: string;
        };
        movie: {
            id: number;
            title: string;
            description: string;
            status: string;
        };
    } & {
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
