import { User } from './user.model';
import { Repository, DeepPartial } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { ConstituencyService } from '../constituency/constituency.service';
export declare class UserService {
    private readonly userRepository;
    private readonly constituencyService;
    constructor(userRepository: Repository<User>, constituencyService: ConstituencyService);
    getAll(): Promise<User[]>;
    getOne(id: number): Promise<User>;
    login(username: string, password: string): Promise<{
        username: string;
        role: import("./user.model").Roles;
        token: string;
    }>;
    create(data: DeepPartial<UserDto>): Promise<User>;
    getOneByUsername(username: string): Promise<User>;
}
