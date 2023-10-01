import { UserRepository } from './user.repository';
import { CreateUsersRequest, UpdateUsersRequest } from './dto/user.request';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    getUsers(): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
    }[]>;
    getUsersById(id: number): Promise<{
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
