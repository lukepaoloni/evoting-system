import { Party } from './party.model';
import { Repository, DeepPartial } from 'typeorm';
import { PartyDto } from './dto/party.dto';
export declare class PartyService {
    private readonly partyRepository;
    constructor(partyRepository: Repository<Party>);
    getAll(): Promise<Party[]>;
    create(data: DeepPartial<PartyDto>): Promise<Party>;
}
