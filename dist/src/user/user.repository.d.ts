import { PrismaService } from "src/prisma/prisma.service";
import { CreateUsersRequest, GetUserRequest, UpdateUsersRequest } from "./dto/user.request";
export declare class UserRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllUser(): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
    }[]>;
    findById(request: GetUserRequest): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
    }>;
    createUsers(request: CreateUsersRequest): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
    }>;
    deleteUsers(id: number): Promise<void>;
    updateUsers(request: UpdateUsersRequest): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
    }>;
}
