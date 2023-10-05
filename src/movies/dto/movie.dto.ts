import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Status } from "../entity/status";

export class GetMovieRequest {
    @IsNumber()
    @IsNotEmpty()
    id: number;

  }

  export class CreateMovieRequest {
    @IsString()
    @IsNotEmpty()
    title: string;
  
    @IsString()
    @IsNotEmpty()
    description: string;
  
    @IsEnum(Status)
    @IsNotEmpty()
    status: Status;
  }


  export class UpdateMovieRequest {
    @IsNumber()
    @IsNotEmpty()
    id: number;
  
    @IsString()
    @IsNotEmpty()
    title: string;
  
    @IsString()
    @IsNotEmpty()
    description: string;
  
    @IsString()
    @IsNotEmpty()
    status: string;
  }

  export class MovieResponseDto {

    @IsNumber()
    @IsNotEmpty()
    id: number;
  
    @IsString()
    @IsNotEmpty()
    title: string;
  
    @IsString()
    @IsNotEmpty()
    description: string;
  
    @IsString()
    @IsNotEmpty()
    status: string;

    constructor(id: number, title: string, description: string, status: string) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.status = status;
    }
  }
  
  