
export enum SC2Target {
    GROUND = 0,
    AIR = 1,
    BUILDING = 2
}

export class SC2Attack {
    target: Array<SC2Target>;
    damage: string;
    dps: string;
    cooldown: string;
    range: string;

    constructor(target: Array<SC2Target>, damage: string, dps: string, cooldown: string, range: string) {
        this.target = target;
        this.damage = damage;
        this.dps = dps;
        this.cooldown = cooldown;
        this.range = range;
    }
}

export class SC2Defence {
    life: string;
    shield: string;
    armor: string;

    constructor(life: string,
        shield: string,
        armor: string) {
        this.life = life;
        this.shield = shield;
        this.armor = armor;
    }
}

export class SC2Energy {
    spawn_energy: string; 
    full_energy: string; 

    constructor(spawn_energy: string, 
        full_energy: string ) {
        this.spawn_energy = spawn_energy;
        this.full_energy = full_energy;
    }
}

export class SC2OtherInfo {
    energy: SC2Energy;
    speed: string;
    sight: string;
    cargo_size: string;

    constructor(energy: SC2Energy,
        speed: string,
        sight: string,
        cargo_size: string) {
        this.energy = energy;
        this.speed = speed;
        this.sight = sight;
        this.cargo_size = cargo_size;
    }
}

export class SC2Speed {
    value: string; 

    constructor(value: string) {
        this.value = value;
    }
}

export class SC2Sight {
    radius: string; 

    constructor(radius: string) {
        this.radius = radius;
    }
}

export enum SC2CargoType {
    INCLUDE_OTHER_UNITS = 0, 
    IS_INCLUDED_IN_OTHER_UNITS = 1
}
export class SC2Cargo {
    type: SC2CargoType; 
    size: string; 

    constructor(type: SC2CargoType, 
        size: string) {
        this.type = type; 
        this.size = size
    }
}

export class SC2UnitInformation {
    targets: Array<SC2Target>;
    attributes: Array<string>;
    attacks: Array<SC2Attack>;
    defence: SC2Defence;
    energy: SC2Energy;
    speed: SC2Speed;
    sight: SC2Sight;
    cargo: SC2Cargo;

    constructor(
        targets: Array<SC2Target>,
        attributes: Array<string>,
        attacks: Array<SC2Attack>,
        defence: SC2Defence,
        energy: SC2Energy,
        speed: SC2Speed, 
        sight: SC2Sight,
        cargo: SC2Cargo) {
        this.targets = targets;
        this.attributes = attributes;
        this.attacks = attacks;
        this.defence = defence;
        this.energy = energy; 
        this.speed = speed; 
        this.sight = sight; 
        this.cargo = cargo;
    }
}