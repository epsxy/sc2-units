
export const ATTR_BIOLOGICAL = 'Biological'
export const ATTR_MECHANICAL = 'Mechanical'
export const ATTR_LIGHT = 'Light'
export const ATTR_ARMORED = 'Armored'
export const ATTR_DETECTOR = 'Detector'
export const ATTR_HEROIC = 'Heroic'
export const ATTR_MASSIVE = 'Massive' 
export const ATTR_PSIONIC = 'Psionic' 
export const ATTR_STRUCTURE = 'Structure'

export class SC2UnitInformation {
    canAttackGroundUnits: boolean;
    canAttackAirUnits: boolean;
    attributes: Array<string>;
    damage: number; 
    dps: number; 
    cooldown: number; 
    range: number; 

    constructor(canAttackGroundUnits: boolean,
        canAttackAirUnits: boolean, 
        attributes: Array<string>,
        damage: number, 
        dps: number, 
        cooldown: number, 
        range: number) {
        this.canAttackGroundUnits = canAttackGroundUnits;
        this.canAttackAirUnits = canAttackAirUnits;
        this.attributes = attributes;
        this.damage = damage;
        this.dps = dps;
        this.cooldown = cooldown; 
        this.range = range;
    }
}