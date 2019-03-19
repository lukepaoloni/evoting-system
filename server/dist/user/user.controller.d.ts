import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { LoginDto } from './dto/login.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAll(): Promise<import("./user.model").User[]>;
    getOne(id: number): Promise<import("./user.model").User>;
    login(data: LoginDto): Promise<{
        username: string;
        role: import("./user.model").Roles;
        token: string;
    }>;
    getConstituency(): Promise<{
        id: number;
        name: string;
        candidates: import("../candidate/candidate.model").Candidate[];
        voters: import("./user.model").User[];
    }>;
    create(data: UserDto): Promise<any>;
}
