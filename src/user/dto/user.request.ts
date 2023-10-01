import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class GetUserRequest {

    @IsNumber()
    @IsNotEmpty()
    id: number;

}

export class CreateUsersRequest {

    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    password: string;
}

export class UpdateUsersRequest {

    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    password: string;
}