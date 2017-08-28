export enum SC2RaceType {
    PROTOSS = 0, 
    ZERG = 1,
    TERRAN = 2
}

export class SC2Race {
    id: string; 
    name: string; 
    type: SC2RaceType;
    description: string;

    constructor(id: string, name: string, type: SC2RaceType, description: string) {
        this.id = id; 
        this.name = name;
        this.type = type;
        this.description = description;
    }
}