import { SC2Asset } from '../../../model/sc2asset';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Unit } from '../../../model/sc2unit';
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
import { TERRAN_RACE } from '../../races/races';
import {
    PROTOSS_IMMORTAL_ID,
    PROTOSS_STALKER_ID,
    TERRAN_MARAUDER_ID,
    TERRAN_MARINE_ID,
    TERRAN_THOR_ID,
    ZERG_MUTALISK_ID,
    ZERG_ZERGLING_ID,
} from '../const';


export const TERRAN_THOR = new SC2Unit(
    TERRAN_THOR_ID,
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
    [new SC2UnitLink(PROTOSS_STALKER_ID), new SC2UnitLink(ZERG_MUTALISK_ID), new SC2UnitLink(TERRAN_MARINE_ID)],
    [new SC2UnitLink(PROTOSS_IMMORTAL_ID), new SC2UnitLink(ZERG_ZERGLING_ID), new SC2UnitLink(TERRAN_MARAUDER_ID)],
    new SC2Asset('assets/units/terran/thumbnail/thor.png', 'assets/units/terran/image/thor.jpg')
);