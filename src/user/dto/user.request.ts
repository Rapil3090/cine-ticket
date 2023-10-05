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

export class UserResponseDto {

    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsString()
    email: string;

    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}