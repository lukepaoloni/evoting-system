"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const party_service_1 = require("./party.service");
const party_controller_1 = require("./party.controller");
const typeorm_1 = require("@nestjs/typeorm");
const party_model_1 = require("./party.model");
let PartyModule = class PartyModule {
};
PartyModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([party_model_1.Party])],
        providers: [party_service_1.PartyService],
        controllers: [party_controller_1.PartyController],
    })
], PartyModule);
exports.PartyModule = PartyModule;
//# sourceMappingURL=party.module.js.map