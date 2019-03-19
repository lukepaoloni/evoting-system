import { BaseEntity } from 'typeorm';
export declare class Config extends BaseEntity {
    readonly id: number;
    startDate: Date;
    endDate: Date;
}
