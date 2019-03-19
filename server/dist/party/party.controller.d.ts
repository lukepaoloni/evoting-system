import { PartyService } from './party.service';
import { PartyDto } from './dto/party.dto';
export declare class PartyController {
    private readonly partyService;
    constructor(partyService: PartyService);
    create(data: PartyDto): Promise<any>;
    getAll(): Promise<import("./party.model").Party[]>;
}
