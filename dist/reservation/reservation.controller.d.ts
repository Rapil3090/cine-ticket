import { ReservationService } from './reservation.service';
import { CreateReservationRequest, UpdateReservationRequest } from './dto/reservation.request';
export declare class ReservationController {
    private reservationservice;
    constructor(reservationservice: ReservationService);
    createReservation(request: CreateReservationRequest): Promise<{
        id: number;
        userId: number;
        movieId: number;
        reservationDate: Date;
    }>;
    getAllReservation(): Promise<{
        id: number;
        userId: number;
        movieId: number;
        reservationDate: Date;
    }[]>;
    getReservationById(id: string): Promise<{
        id: number;
        userId: number;
        movieId: number;
        reservationDate: Date;
    }>;
    deleteReservationById(id: string): Promise<void>;
    updateReservation(request: UpdateReservationRequest): Promise<{
        id: number;
        userId: number;
        movieId: number;
        reservationDate: Date;
    }>;
}
