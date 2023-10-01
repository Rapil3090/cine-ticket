import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Status } from "../entity/status";


export class CreateMovieRequest {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

//   @IsString()
  @IsEnum(Status)
  @IsNotEmpty()
  status: Status;
}
