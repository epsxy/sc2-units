
export class SC2Target {
    canAttackGroundUnits: boolean;
    canAttackAirUnits: boolean;

    constructor(canAttackGroundUnits: boolean,
        canAttackAirUnits: boolean) {
        this.canAttackGroundUnits = canAttackGroundUnits;
        this.canAttackAirUnits = canAttackAirUnits;
    }
}

export class SC2Attack {
    damage: number;
    dps: number;
    cooldown: number;
    range: number;

    constructor(damage: number, dps: number, cooldown: number, range: number) {
        this.damage = damage;
        this.dps = dps;
        this.cooldown = cooldown;
        this.range = range;
    }
}

export class SC2Defence {
    life: number;
    shield: number;
    armor: number;

    constructor(life: number,
        shield: number,
        armor: number) {
        this.life = life;
        this.shield = shield;
        this.armor = armor;
    }
}

export class SC2Energy {
    spawn_energy: number; 
    full_energy: number; 

    constructor(spawn_energy: number, 
        full_energy: number ) {
        this.spawn_energy = spawn_energy;
        this.full_energy = full_energy;
    }
}

export class SC2OtherInfo {
    energy: SC2Energy;
    speed: number;
    sight: number;
    cargo_size: number;

    constructor(energy: SC2Energy,
        speed: number,
        sight: number,
        cargo_size: number) {
        this.energy = energy;
        this.speed = speed;
        this.sight = sight;
        this.cargo_size = cargo_size;
    }
}

export class SC2UnitInformation {
    target: SC2Target;
    attributes: Array<string>;
    attack: SC2Attack;
    defence: SC2Defence;
    others: SC2OtherInfo;

    constructor(target: SC2Target,
        attributes: Array<string>,
        attack: SC2Attack,
        defence: SC2Defence,
        others: SC2OtherInfo) {
        this.target = target;
        this.attributes = attributes;
        this.attack = attack;
        this.defence = defence;
        this.others = others;
    }
}