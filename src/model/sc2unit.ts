import { SC2UnitInformation } from './sc2unitinformation';
import { SC2Asset } from './sc2asset';
import { SC2Source } from './sc2source';
import { SC2Cost } from './sc2cost';
import { SC2Ability } from './sc2ability';
import { SC2Race } from './sc2races';
import { SC2UnitLink } from "./sc2unitlink";

export class SC2Unit {
    id: string;
    name: string;
    race: SC2Race;
    description: string;
    cost: SC2Cost;
    information: SC2UnitInformation;
    abilities: Array<SC2Ability>;
    source: SC2Source;
    strongAgainst: Array<SC2UnitLink>;
    weakAgainst: Array<SC2UnitLink>;
    assets: SC2Asset;

    constructor(id: string,
        name: string, 
        race: SC2Race, 
        description: string, 
        cost: SC2Cost, 
        information: SC2UnitInformation,
        abilities: Array<SC2Ability>,
        source: SC2Source,  
        strongAgainst: Array<SC2UnitLink>,
        weakAgainst: Array<SC2UnitLink>,
        assets: SC2Asset) {
        this.id = id;
        this.name = name;
        this.race = race; 
        this.description = description;
        this.cost = cost; 
        this.information = information
        this.abilities = abilities; 
        this.source = source; 
        this.strongAgainst = strongAgainst;
        this.weakAgainst = weakAgainst;
        this.assets = assets;
    }
}