import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class GetMovieRequest {
    @IsNumber()
    @IsNotEmpty()
    id: number;
  
    // @IsString()
    // @IsNotEmpty()
    // title: string;
  
    // @IsString()
    // @IsNotEmpty()
    // description: string;
  
    // @IsString()
    // @IsNotEmpty()
    // status: string;
  }
  