import { ExecutionContext } from '@nestjs/common';
declare const JwtAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtAuthGuard extends JwtAuthGuard_base {
    canActivate(context: ExecutionContext): Promise<boolean>;
    validateToken(token: string): Promise<string | object>;
    handleRequest(err: any, user: any, info: any): any;
}
export {};
