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
