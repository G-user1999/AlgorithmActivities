import { HouseRules } from "./HouseRules";
import { NobleHouse } from "./nobleHouse";

export class HouseLannister extends NobleHouse implements HouseRules {
    public armySize: string;
    public houseSymbol: string;
    
}