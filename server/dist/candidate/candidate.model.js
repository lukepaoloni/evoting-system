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
const constituency_model_1 = require("../constituency/constituency.model");
const party_model_1 = require("../party/party.model");
let Candidate = class Candidate extends typeorm_1.BaseEntity {
    incrementVote() {
        this.numOfVotes++;
    }
    get name() {
        return `${this.firstName} ${this.lastName}`;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Candidate.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 255,
    }),
    __metadata("design:type", String)
], Candidate.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column({
        length: 255,
    }),
    __metadata("design:type", String)
], Candidate.prototype, "lastName", void 0);
__decorate([
    typeorm_1.ManyToOne(type => constituency_model_1.Constituency, constituency => constituency.candidates),
    __metadata("design:type", constituency_model_1.Constituency)
], Candidate.prototype, "constituency", void 0);
__decorate([
    typeorm_1.ManyToOne(type => party_model_1.Party, party => party.candidates),
    __metadata("design:type", party_model_1.Party)
], Candidate.prototype, "party", void 0);
__decorate([
    typeorm_1.Column({
        unsigned: true,
    }),
    __metadata("design:type", Number)
], Candidate.prototype, "numOfVotes", void 0);
__decorate([
    typeorm_1.Column({
        unsigned: true,
        default: false,
    }),
    __metadata("design:type", Boolean)
], Candidate.prototype, "isElected", void 0);
Candidate = __decorate([
    typeorm_1.Entity('candidates')
], Candidate);
exports.Candidate = Candidate;
//# sourceMappingURL=candidate.model.js.map