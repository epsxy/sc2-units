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
import { ATTR_ARMORED, ATTR_MECHANICAL } from '../../../model/const';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const TERRAN_SIEGE_TANK = new SC2Unit(
    'f20e2af3-97fd-4a9b-987a-e126647d60e0',
    'Siege Tank',
    TERRAN_RACE,
    'The long-ranged Siege Tank is a Mechanical unit built from a Factory with an attached Tech Lab ' +
    'and high damage versus Armored like Roaches and Stalkers. Against smaller units, the Siege Tank ' +
    'can switch to the stationary Siege Mode to deal splash damage from longer range.',
    new SC2Cost(150, 125, 32, 3),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_ARMORED, ATTR_MECHANICAL],
        [
            new SC2Attack([SC2Target.GROUND], '15', '20.27', '0.74', '7'),
            new SC2Attack([SC2Target.GROUND], '40', '18.69', '2.14', '13')
        ],
        new SC2Defence('175', '0', '1'),
        null,
        new SC2Speed('3.15'),
        new SC2Sight('11'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '0')
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/terran/thumbnail/siege-tank.png', 'assets/units/terran/image/siege-tank.jpg')
);