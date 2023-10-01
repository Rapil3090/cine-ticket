import { UserService } from './user.service';
import { CreateUsersRequest, UpdateUsersRequest } from './dto/user.request';
export declare class UserController {
    private usersService;
    constructor(usersService: UserService);
    createUser(request: CreateUsersRequest): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
    }>;
    getAllUsers(): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
    }[]>;
    getUsersById(id: string): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
    }>;
    deleteUsers(id: string): Promise<void>;
    updateUsers(request: UpdateUsersRequest): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
    }>;
}
