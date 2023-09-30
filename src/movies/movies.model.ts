import { Status as PrismaStatus } from '@prisma/client';

export enum Status {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE',
}

export interface Movie {
    // id: number;
    title: string;
    description: string;
    status: Status;
}