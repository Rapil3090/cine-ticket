import { ReservationRepository } from './reservation.repository';
import { CreateReservationRequest, UpdateReservationRequest } from './dto/reservation.request';
export declare class ReservationService {
    private readonly reservationRepository;
    constructor(reservationRepository: ReservationRepository);
    getReservation(): Promise<{
        id: number;
        userId: number;
        movieId: number;
        reservationDate: Date;
    }[]>;
    getReservationById(id: number): Promise<{
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
