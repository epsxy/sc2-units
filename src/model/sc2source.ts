export enum SourceType {
    BUILDING = 0, 
    UNIT = 1
}

export class SC2Source {
    name: string;
    type: SourceType;
    hotkey: string;

    constructor(name: string,
        type: SourceType,
        hotkey: string) {
        this.name = name;
        this.hotkey = hotkey;
    }
}