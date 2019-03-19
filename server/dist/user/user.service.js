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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_model_1 = require("./user.model");
const typeorm_2 = require("typeorm");
const constituency_service_1 = require("../constituency/constituency.service");
let UserService = class UserService {
    constructor(userRepository, constituencyService) {
        this.userRepository = userRepository;
        this.constituencyService = constituencyService;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.find({
                relations: ['constituency'],
            });
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.findOne({
                where: {
                    id,
                },
                relations: ['constituency'],
            });
        });
    }
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOneOrFail({
                where: {
                    username,
                },
            });
            if (!user || !(yield user.comparePassword(password))) {
                throw new common_1.NotFoundException(`Unable to find the user with that username (${username}) & password.`);
            }
            return user.toJson();
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const constituency = yield this.constituencyService.getOneById(data.constituencyId);
            let user = new user_model_1.User(data);
            user.constituency = constituency;
            user = yield this.userRepository.create(user);
            return yield this.userRepository.save(user);
        });
    }
    getOneByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.findOneOrFail({
                where: {
                    username,
                },
            });
        });
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_model_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        constituency_service_1.ConstituencyService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map