"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
const passport_1 = require("@nestjs/passport");
const jwt = require("jsonwebtoken");
const config_1 = require("@app/config");
let JwtAuthGuard = class JwtAuthGuard extends passport_1.AuthGuard('jwt') {
    canActivate(context) {
        return __awaiter(this, void 0, void 0, function* () {
            const ctx = context.switchToHttp();
            const request = ctx.getRequest();
            const token = request.headers.authorization;
            if (!token) {
                return false;
            }
            request.user = yield this.validateToken(token);
            return true;
        });
    }
    validateToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (token.split(' ')[0] !== 'Bearer') {
                throw new common_1.UnauthorizedException('Invalid token');
            }
            const bearerToken = token.split(' ')[1];
            try {
                const decoded = jwt.verify(bearerToken, config_1.default.JWT_SECRET_KEY);
                return decoded;
            }
            catch (err) {
                const message = `Token error: ${err.message || err.name}`;
                throw new common_1.UnauthorizedException(message);
            }
        });
    }
    handleRequest(err, user, info) {
        if (err || !user) {
            throw err || new common_1.UnauthorizedException();
        }
        return user;
    }
};
JwtAuthGuard = __decorate([
    common_1.Injectable()
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;
//# sourceMappingURL=jwt-auth.guard.js.map