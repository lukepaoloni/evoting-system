"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const constituency_controller_1 = require("./constituency.controller");
const constituency_service_1 = require("./constituency.service");
const typeorm_1 = require("@nestjs/typeorm");
const constituency_model_1 = require("./constituency.model");
let ConstituencyModule = class ConstituencyModule {
};
ConstituencyModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([constituency_model_1.Constituency])],
        controllers: [constituency_controller_1.ConstituencyController],
        providers: [constituency_service_1.ConstituencyService],
        exports: [constituency_service_1.ConstituencyService],
    })
], ConstituencyModule);
exports.ConstituencyModule = ConstituencyModule;
//# sourceMappingURL=constituency.module.js.map