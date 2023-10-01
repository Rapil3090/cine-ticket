import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUsersRequest, GetUserRequest, UpdateUsersRequest } from './dto/user.request';

@Controller('users')
export class UserController {
    constructor(private usersService: UserService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async createUser(@Body() request: CreateUsersRequest) {
        return await this.usersService.createUsers(request);
    }

    @Get()
    async getAllUsers() {
        return await this.usersService.getUsers();
    }

    @Get(":id")
    async getUsersById(@Param("id") id: string) {
        const userId = parseInt(id, 10);
        const request: GetUserRequest = { id: userId };

        return await this.usersService.getUsersById(userId);
    }

    @Delete(":id")
    async deleteUsers(@Param("id") id: string): Promise<void> {
        const userId = parseInt(id, 10);
        await this.usersService.deleteUsers(userId);
    }

    @Patch("/update")
    async updateUsers(@Body() request: UpdateUsersRequest) {
        return await this.usersService.updateUsers(request);
    }
}
