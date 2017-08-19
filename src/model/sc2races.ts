export enum SC2RaceType {
    PROTOSS = 0, 
    ZERG = 1,
    TERRAN = 2
}

export class SC2Race {
    id: string; 
    name: string; 
    type: SC2RaceType

    constructor(id: string, name: string, type: SC2RaceType) {
        this.id = id; 
        this.name = name;
        this.type = type;
    }
}