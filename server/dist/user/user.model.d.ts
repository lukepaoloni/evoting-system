import { BaseEntity } from 'typeorm';
import { Constituency } from '../constituency/constituency.model';
export declare class User extends BaseEntity {
    constructor(data: any);
    readonly id: number;
    username: string;
    password: string;
    role: Roles;
    constituency: Constituency;
    hashPassword(): Promise<void>;
    comparePassword(attempt: string): Promise<boolean>;
    private readonly token;
    toJson(showToken?: boolean): {
        username: string;
        role: Roles;
        token: string;
    };
}
export declare enum Roles {
    Voter = "voter",
    Admin = "admin"
}
