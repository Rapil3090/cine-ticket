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
exports.MovieEntity = void 0;
const class_transformer_1 = require("class-transformer");
class MovieEntity {
    get id() {
        return this.id;
    }
    set id(value) {
        this._id = value;
    }
    get title() {
        return this.title;
    }
    set title(value) {
        this._title = value;
    }
    get description() {
        return this.description;
    }
    set description(value) {
        this._description = value;
    }
}
exports.MovieEntity = MovieEntity;
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], MovieEntity.prototype, "_id", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], MovieEntity.prototype, "_title", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], MovieEntity.prototype, "_description", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], MovieEntity.prototype, "id", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], MovieEntity.prototype, "title", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], MovieEntity.prototype, "description", null);
//# sourceMappingURL=movies.entity.js.map