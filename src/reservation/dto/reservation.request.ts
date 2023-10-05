import { MovieResponseDto } from "@/src/movies/dto/movie.dto";
import { UserResponseDto } from "@/src/user/dto/user.request";
import { Type } from "class-transformer";
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


export class ReservationResponseDto {

    id: number;

    reservationDate: Date;    

    @Type(() => UserResponseDto)
    user: UserResponseDto;

    @Type(() => MovieResponseDto)
    movie: MovieResponseDto;

    constructor(reservationId: any) {
        this.id = reservationId.id;
        this.user = new UserResponseDto(reservationId.user.id, reservationId.user.name, reservationId.user.email);
        this.movie = new MovieResponseDto(reservationId.movie.id, reservationId.movie.title, reservationId.movie.description, reservationId.movie.status );
        this.reservationDate = reservationId.reservationDate;
    }
}