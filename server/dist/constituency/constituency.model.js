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
const typeorm_1 = require("typeorm");
const candidate_model_1 = require("src/candidate/candidate.model");
const user_model_1 = require("@user/user.model");
let Constituency = class Constituency extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Constituency.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        unique: true,
        type: 'varchar',
        length: 255,
    }),
    __metadata("design:type", String)
], Constituency.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany(type => candidate_model_1.Candidate, candidate => candidate.constituency),
    __metadata("design:type", Array)
], Constituency.prototype, "candidates", void 0);
__decorate([
    typeorm_1.OneToMany(type => user_model_1.User, user => user.constituency),
    __metadata("design:type", Array)
], Constituency.prototype, "voters", void 0);
Constituency = __decorate([
    typeorm_1.Entity('constituencies')
], Constituency);
exports.Constituency = Constituency;
//# sourceMappingURL=constituency.model.js.map