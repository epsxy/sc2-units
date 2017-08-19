import { SC2Source } from './sc2source';
import { SC2Cost } from './sc2cost';
import { SC2Ability } from './sc2ability';
import { SC2RaceType } from './sc2races';

export class SC2Unit {
    name: string;
    race: SC2RaceType;
    description: string;
    cost: SC2Cost;
    abilities: Array<SC2Ability>;
    source: SC2Source;
    thumbnail: string;

    constructor(name: string, 
        race: SC2RaceType, 
        description: string, 
        cost: SC2Cost, 
        abilities: Array<SC2Ability>, 
        source: SC2Source, 
        thumbnail: string) {
        this.name = name;
        this.race = race; 
        this.description = description;
        this.cost = cost; 
        this.abilities = abilities; 
        this.source = source; 
        this.thumbnail = thumbnail;
    }
}