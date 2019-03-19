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
const dotenv = require("dotenv");
const typescript_stringcaster_1 = require("typescript-stringcaster");
dotenv.config();
const source = process.env;
class Config {
}
__decorate([
    typescript_stringcaster_1.inject({ cast: typescript_stringcaster_1.toNumber, defaultValue: 4000, source }),
    __metadata("design:type", Number)
], Config.prototype, "APP_PORT", void 0);
__decorate([
    typescript_stringcaster_1.inject({ cast: typescript_stringcaster_1.toString, defaultValue: 'asecret', source }),
    __metadata("design:type", String)
], Config.prototype, "JWT_SECRET_KEY", void 0);
__decorate([
    typescript_stringcaster_1.inject({ cast: typescript_stringcaster_1.toString, source }),
    __metadata("design:type", String)
], Config.prototype, "SESSION_EXPIRES_IN", void 0);
exports.default = new Config();
//# sourceMappingURL=config.js.map