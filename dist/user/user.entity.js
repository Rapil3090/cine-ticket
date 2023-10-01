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
exports.UserEntity = void 0;
const class_transformer_1 = require("class-transformer");
class UserEntity {
    get id() {
        return this.id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this.name;
    }
    set name(value) {
        this._name = value;
    }
    get email() {
        return this.email;
    }
    set email(value) {
        this._email = value;
    }
    get password() {
        return this.password;
    }
    set password(value) {
        this._password = value;
    }
}
exports.UserEntity = UserEntity;
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], UserEntity.prototype, "_id", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], UserEntity.prototype, "_name", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], UserEntity.prototype, "_email", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], UserEntity.prototype, "_password", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], UserEntity.prototype, "id", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], UserEntity.prototype, "name", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], UserEntity.prototype, "email", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], UserEntity.prototype, "password", null);
//# sourceMappingURL=user.entity.js.map