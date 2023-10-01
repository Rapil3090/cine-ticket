import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUsersRequest, GetUserRequest, UpdateUsersRequest } from "./dto/user.request";

@Injectable()
export class UserRepository {
    constructor(private readonly prisma: PrismaService) {}

    async findAllUser() {
        return this.prisma.user.findMany({});
    }

    async findById(request: GetUserRequest) {
        return this.prisma.user.findUnique({
            where: {
                id: request.id,
            },
        });
    }

    async createUsers(request: CreateUsersRequest) {

        return await this.prisma.user.create({
            data: {
                name: request.name,
                email: request.email,
                password: request.password
            },
        });
    }

    async deleteUsers(id: number) {
        await this.prisma.user.delete({
            where: {id},
        });
    }

    async updateUsers(request: UpdateUsersRequest) {
        return await this.prisma.user.update({
            where: { id: request.id},
            data: {
                name: request.name,
                email: request.email,
                password: request.password
            }
        })
    }


}