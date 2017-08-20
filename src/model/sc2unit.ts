import { SC2Source } from './sc2source';
import { SC2Cost } from './sc2cost';
import { SC2Ability } from './sc2ability';
import { SC2Race } from './sc2races';

export class SC2Unit {
    id: string;
    name: string;
    race: SC2Race;
    description: string;
    cost: SC2Cost;
    abilities: Array<SC2Ability>;
    source: SC2Source;
    thumbnail: string;

    constructor(id: string,
        name: string, 
        race: SC2Race, 
        description: string, 
        cost: SC2Cost, 
        abilities: Array<SC2Ability>, 
        source: SC2Source, 
        thumbnail: string) {
        this.id = id;
        this.name = name;
        this.race = race; 
        this.description = description;
        this.cost = cost; 
        this.abilities = abilities; 
        this.source = source; 
        this.thumbnail = thumbnail;
    }
}