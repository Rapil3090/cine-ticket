import { Status } from "../entity/status";
export declare class GetMovieRequest {
    id: number;
}
export declare class CreateMovieRequest {
    title: string;
    description: string;
    status: Status;
}
export declare class UpdateMovieRequest {
    id: number;
    title: string;
    description: string;
    status: string;
}
