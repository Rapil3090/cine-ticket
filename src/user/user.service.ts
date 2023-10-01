import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUsersRequest, UpdateUsersRequest } from './dto/user.request';

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository,
) {}

    async getUsers() {
        return await this.userRepository.findAllUser();
    }

    async getUsersById(id: number) {
        return await this.userRepository.findById({id});
    }

    async createUsers(request: CreateUsersRequest) {
        return await this.userRepository.createUsers(request);
    }

    async deleteUsers(id: number): Promise<void> {

        const userId = await this.getUsersById(id);
        if (!userId) {
            throw new NotFoundException("회원이 존재하지 않습니다");
        }

        return await this.userRepository.deleteUsers(id);
    }

    async updateUsers(request: UpdateUsersRequest) {
        const userId = await this.getUsersById(request.id);

        if (!userId) {
            throw new NotFoundException("회원이 존재하지 않습니다");
        }

        return await this.userRepository.updateUsers(request);
    }


}
