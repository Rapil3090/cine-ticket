export declare class GetReservationRequest {
    id: number;
}
export declare class CreateReservationRequest {
    reservationDate: Date;
    userId: number;
    movieId: number;
}
export declare class UpdateReservationRequest {
    id: number;
    userId: number;
    movieId: number;
    reservationDate: Date;
}
export declare class ReservationResponse {
    id: number;
    user: {
        id: number;
        name: string;
        email: string;
    };
    movie: {
        id: number;
        title: string;
        description: string;
    };
}
