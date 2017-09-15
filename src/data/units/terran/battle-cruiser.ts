import { ATTR_ARMORED, ATTR_MASSIVE, ATTR_MECHANICAL } from '../../../model/const';
import { SC2Asset } from '../../../model/sc2asset';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Unit } from '../../../model/sc2unit';
import { SC2Attack, SC2Defence, SC2Sight, SC2Speed, SC2Target, SC2UnitInformation } from '../../../model/sc2unitinformation';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { TERRAN_RACE } from '../../races/races';
import {
    PROTOSS_VOID_RAY_ID,
    TERRAN_BATTLE_CRUISER_ID,
    TERRAN_MARINE_ID,
    TERRAN_THOR_ID,
    TERRAN_VIKING_ID,
    ZERG_CORRUPTOR_ID,
    ZERG_MUTALISK_ID,
} from '../const';


export const TERRAN_BATTLE_CRUISER = new SC2Unit(
    TERRAN_BATTLE_CRUISER_ID,
    'Battlecruiser',
    TERRAN_RACE,
    'he Battlecruiser is the Terran\'s capital ship. In LotV the Battlecruiser has been granted the ' +
    'Tactical Jump ability, allowing it to teleport anywhere on the map (regardless of fog of war).It can ' +
    'be constructed at a Starport with a Tech Lab add-on once a Fusion Core has been built. It can ' +
    'deal large amounts of damage and has high health. ',
    new SC2Cost(400, 300, 64, 6),
    new SC2UnitInformation(
        [SC2Target.GROUND, SC2Target.AIR],
        [ATTR_ARMORED, ATTR_MECHANICAL, ATTR_MASSIVE],
        [
            new SC2Attack([SC2Target.GROUND], '8', '50', '0.16', '6'),
            new SC2Attack([SC2Target.AIR], '6', '37.5', '0.16', '6')
        ],
        new SC2Defence('550', '0', '3'),
        null,
        new SC2Speed('2.62'),
        new SC2Sight('12'),
        null
    ),
    null,
    null,
    [new SC2UnitLink(ZERG_MUTALISK_ID), new SC2UnitLink(TERRAN_THOR_ID), new SC2UnitLink(TERRAN_MARINE_ID)],
    [new SC2UnitLink(PROTOSS_VOID_RAY_ID), new SC2UnitLink(ZERG_CORRUPTOR_ID), new SC2UnitLink(TERRAN_VIKING_ID)],
    new SC2Asset('assets/units/terran/thumbnail/battlecruiser.png', 'assets/units/terran/image/battlecruiser.jpg')
);