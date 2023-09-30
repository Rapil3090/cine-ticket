export declare enum Status {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE"
}
export interface Movie {
    title: string;
    description: string;
    status: Status;
}
