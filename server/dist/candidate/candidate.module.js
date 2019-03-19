"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const candidate_controller_1 = require("./candidate.controller");
const candidate_service_1 = require("./candidate.service");
const typeorm_1 = require("@nestjs/typeorm");
const candidate_model_1 = require("./candidate.model");
let CandidateModule = class CandidateModule {
};
CandidateModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([candidate_model_1.Candidate])],
        controllers: [candidate_controller_1.CandidateController],
        providers: [candidate_service_1.CandidateService],
    })
], CandidateModule);
exports.CandidateModule = CandidateModule;
//# sourceMappingURL=candidate.module.js.map