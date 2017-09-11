import { SC2Unit } from '../../../model/sc2unit';
import { TERRAN_RACE } from '../../races/races';
import { SC2Cost } from '../../../model/sc2cost';
import {
    SC2Attack,
    SC2Cargo,
    SC2CargoType,
    SC2Defence,
    SC2Energy,
    SC2Sight,
    SC2Speed,
    SC2Target,
    SC2UnitInformation,
} from '../../../model/sc2unitinformation';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const TERRAN_THOR = new SC2Unit(
    '09b552dc-575d-46a3-92ff-0d6ad7801c65',
    'Thor',
    TERRAN_RACE,
    'The Thor is a Massive Terran walking Gun-Battery with strong single target ground attack and a ' +
    'long range missile pod with small area of effect damage. After finishing an Armory, Thors can be ' +
    'built from a Factory with a Tech Lab and have no ability upgrades. The Thor is like the Ultralisk ' +
    'has a moderate damage output for cost, but most of these two units strength comes from a large health ' +
    'pool that can be repaired with SCVs and Queens; while blocking for weaker higher damage units ' +
    'like Liberators and Siege Tanks.',
    new SC2Cost(300, 200, 0, 0),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [],
        [new SC2Attack([SC2Target.GROUND], '0', '0', '0', '0')],
        new SC2Defence('0', '0', '0'),
        new SC2Energy('0', '0'),
        new SC2Speed('0'),
        new SC2Sight('0'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '8')
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/terran/thumbnail/thor.png', 'assets/units/terran/image/thor.jpg')
);