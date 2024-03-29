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
const party_service_1 = require("./party.service");
const swagger_1 = require("@nestjs/swagger");
const party_dto_1 = require("./dto/party.dto");
let PartyController = class PartyController {
    constructor(partyService) {
        this.partyService = partyService;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.partyService.create(data);
                return {
                    success: true,
                    message: 'Successfully created a new a party.',
                };
            }
            catch (err) {
                return Object.assign({ success: false }, err);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.partyService.getAll();
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [party_dto_1.PartyDto]),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PartyController.prototype, "getAll", null);
PartyController = __decorate([
    swagger_1.ApiUseTags('Parties'),
    common_1.Controller('api/rest/parties'),
    __metadata("design:paramtypes", [party_service_1.PartyService])
], PartyController);
exports.PartyController = PartyController;
//# sourceMappingURL=party.controller.js.map