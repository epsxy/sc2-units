import { SC2Unit } from '../../../model/sc2unit';
import { TERRAN_RACE } from '../../races/races';
import { SC2Cost } from '../../../model/sc2cost';
import {
    SC2Attack,
    SC2Cargo,
    SC2CargoType,
    SC2Defence,
    SC2Sight,
    SC2Speed,
    SC2Target,
    SC2UnitInformation,
} from '../../../model/sc2unitinformation';
import { ATTR_BIOLOGICAL, ATTR_LIGHT, ATTR_MECHANICAL } from '../../../model/const';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const TERRAN_HELLBAT = new SC2Unit(
    'a7b67a8f-02e8-4df2-9e18-8c14b1320e79',
    'Hellbat',
    TERRAN_RACE,
    'A tough melee-range unit with conical splash damage, after finishing an Armory Hellbats can be produced ' +
    'from the Factory or transformed from and into the Hellion (Transformation takes 2 seconds). The Hellbat is ' +
    'both a Biological unit and a Mechanical unit and can be healed by both Medivacs and SCVs. The Hellbat has ' +
    '45 more health points than the Hellion and a short-ranged conical splash damage. Ideal for tanking and ' +
    'dealing damage to Melee units.',
    new SC2Cost(100, 0, 21, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_LIGHT, ATTR_BIOLOGICAL, ATTR_MECHANICAL],
        [new SC2Attack([SC2Target.GROUND], '18', '12.6', '1.43', '2')],
        new SC2Defence('135', '0', '0'),
        null,
        new SC2Speed('3.15'),
        new SC2Sight('10'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '4')
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/terran/thumbnail/hellbat.png', 'assets/units/terran/image/hellbat.jpg')
);