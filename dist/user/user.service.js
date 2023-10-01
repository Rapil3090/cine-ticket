"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("./user.repository");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getUsers() {
        return await this.userRepository.findAllUser();
    }
    async getUsersById(id) {
        return await this.userRepository.findById({ id });
    }
    async createUsers(request) {
        return await this.userRepository.createUsers(request);
    }
    async deleteUsers(id) {
        const userId = await this.getUsersById(id);
        if (!userId) {
            throw new common_1.NotFoundException("회원이 존재하지 않습니다");
        }
        return await this.userRepository.deleteUsers(id);
    }
    async updateUsers(request) {
        const userId = await this.getUsersById(request.id);
        if (!userId) {
            throw new common_1.NotFoundException("회원이 존재하지 않습니다");
        }
        return await this.userRepository.updateUsers(request);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
//# sourceMappingURL=user.service.js.map