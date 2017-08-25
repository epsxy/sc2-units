
export enum SC2Target {
    GROUND = 0,
    AIR = 1
}

export class SC2Attack {
    target: SC2Target;
    damage: string;
    dps: string;
    cooldown: string;
    range: string;

    constructor(target: SC2Target, damage: string, dps: string, cooldown: string, range: string) {
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

export class SC2UnitInformation {
    // target: SC2Target;
    attributes: Array<string>;
    attacks: Array<SC2Attack>;
    defence: SC2Defence;
    others: SC2OtherInfo;

    constructor(
        // target: SC2Target,
        attributes: Array<string>,
        attacks: Array<SC2Attack>,
        defence: SC2Defence,
        others: SC2OtherInfo) {
        // this.target = target;
        this.attributes = attributes;
        this.attacks = attacks;
        this.defence = defence;
        this.others = others;
    }
}