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
  
  