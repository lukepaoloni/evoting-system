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
const candidate_model_1 = require("../candidate/candidate.model");
let Party = class Party extends typeorm_1.BaseEntity {
    constructor(data) {
        super();
        Object.assign(this, data);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Party.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Party.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Party.prototype, "link", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text',
    }),
    __metadata("design:type", String)
], Party.prototype, "manifesto", void 0);
__decorate([
    typeorm_1.OneToMany(type => candidate_model_1.Candidate, candidate => candidate.party),
    __metadata("design:type", Array)
], Party.prototype, "candidates", void 0);
Party = __decorate([
    typeorm_1.Entity('parties'),
    __metadata("design:paramtypes", [Object])
], Party);
exports.Party = Party;
//# sourceMappingURL=party.model.js.map