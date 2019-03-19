import { AuthService } from './auth.service';
import { Credentials } from './dto/credentials.dto';
import { UserService } from '../user/user.service';
export declare class AuthController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UserService);
    getToken(credentials: Credentials): Promise<{
        expiresIn: string;
        accessToken: string;
        role: import("../user/user.model").Roles;
    }>;
    verify(headers: any): Promise<{}>;
    getMe(body: any): Promise<{
        id: number;
        username: string;
        password: string;
        role: import("../user/user.model").Roles;
        constituency: import("../constituency/constituency.model").Constituency;
    }>;
}
