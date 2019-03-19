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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const constituency_model_1 = require("../constituency/constituency.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config_1 = require("@app/config");
let User = class User extends typeorm_1.BaseEntity {
    constructor(data) {
        super();
        Object.assign(this, data);
    }
    hashPassword() {
        return __awaiter(this, void 0, void 0, function* () {
            const salt = yield bcrypt.genSalt(12);
            this.password = yield bcrypt.hash(this.password, salt);
        });
    }
    comparePassword(attempt) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bcrypt.compare(attempt, this.password);
        });
    }
    get token() {
        const { id } = this;
        return jwt.sign({
            id,
        }, config_1.default.JWT_SECRET_KEY, {
            expiresIn: config_1.default.SESSION_EXPIRES_IN,
        });
    }
    toJson(showToken = true) {
        const { username, role, token } = this;
        return {
            username,
            role,
            token,
        };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        unique: true,
    }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        default: 'voter',
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    typeorm_1.ManyToOne(type => constituency_model_1.Constituency, constituency => constituency.voters),
    typeorm_1.JoinColumn(),
    __metadata("design:type", constituency_model_1.Constituency)
], User.prototype, "constituency", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
User = __decorate([
    typeorm_1.Entity('users'),
    __metadata("design:paramtypes", [Object])
], User);
exports.User = User;
var Roles;
(function (Roles) {
    Roles["Voter"] = "voter";
    Roles["Admin"] = "admin";
})(Roles = exports.Roles || (exports.Roles = {}));
//# sourceMappingURL=user.model.js.map