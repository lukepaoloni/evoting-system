import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { UserService } from '../user/user.service';
import { Credentials } from './dto/credentials.dto';
export declare class AuthService {
    private readonly jwtService;
    private readonly userService;
    constructor(jwtService: JwtService, userService: UserService);
    createToken(credentials: Credentials): Promise<{
        expiresIn: string;
        accessToken: string;
        role: import("../user/user.model").Roles;
    }>;
    verifyToken(token: string): Promise<{}>;
    validateUser(payload: JwtPayload): Promise<import("../user/user.model").User>;
}
