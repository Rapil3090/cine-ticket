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
exports.ReservationEntity = void 0;
const class_transformer_1 = require("class-transformer");
class ReservationEntity {
    get id() {
        return this.id;
    }
    set id(value) {
        this._id = value;
    }
    get userId() {
        return this.userId;
    }
    set userId(value) {
        this._userId = value;
    }
    get movieId() {
        return this.movieId;
    }
    set movieId(value) {
        this._movieId = value;
    }
    get reservationDate() {
        return this.reservationDate;
    }
    set reservationDate(value) {
        this._reservationDate = value;
    }
}
exports.ReservationEntity = ReservationEntity;
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], ReservationEntity.prototype, "_id", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], ReservationEntity.prototype, "_userId", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], ReservationEntity.prototype, "_movieId", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], ReservationEntity.prototype, "_reservationDate", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], ReservationEntity.prototype, "id", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], ReservationEntity.prototype, "userId", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], ReservationEntity.prototype, "movieId", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [Date])
], ReservationEntity.prototype, "reservationDate", null);
//# sourceMappingURL=reservation.entity.js.map