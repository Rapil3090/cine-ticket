import { IsNotEmpty, IsNumber } from "class-validator";

export class GetMovieRequest {
    @IsNumber()
    @IsNotEmpty()
    id: number;
}