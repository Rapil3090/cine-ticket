import { IsNotEmpty, IsNumber } from "class-validator";

export class GetReservationRequest {

    @IsNumber()
    @IsNotEmpty()
    id: number;

}

export class CreateReservationRequest {

    reservationDate: Date;

    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsNumber()
    @IsNotEmpty()
    movieId: number;

}

export class UpdateReservationRequest {

    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsNumber()
    @IsNotEmpty()
    movieId: number;

    reservationDate: Date;
}

export class ReservationResponse {

    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNumber()
    @IsNotEmpty()
    user: {
        id: number;
        name: string;
        email: string;
    }

    @IsNumber()
    @IsNotEmpty()
    movie: {
        id: number;
        title: string;
        description: string;
    }

}