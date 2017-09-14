import { ZERG_CORRUPTOR } from '../zerg/corruptor';
import { PROTOSS_VOID_RAY } from '../protoss/void-ray';
import { TERRAN_VIKING } from './viking';
import { TERRAN_MARINE } from './marine';
import { TERRAN_THOR } from './thor';
import { ZERG_MUTALISK } from '../zerg/mutalisk';
import { SC2Unit } from '../../../model/sc2unit';
import { TERRAN_RACE } from '../../races/races';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Attack, SC2Defence, SC2Sight, SC2Speed, SC2Target, SC2UnitInformation } from '../../../model/sc2unitinformation';
import { ATTR_ARMORED, ATTR_MASSIVE, ATTR_MECHANICAL } from '../../../model/const';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const TERRAN_BATTLE_CRUISER = new SC2Unit(
    'ce481091-38c3-4633-8e9a-b2205f34d104',
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
    [new SC2UnitLink(ZERG_MUTALISK.id), new SC2UnitLink(TERRAN_THOR.id), new SC2UnitLink(TERRAN_MARINE.id)],
    [new SC2UnitLink(PROTOSS_VOID_RAY.id), new SC2UnitLink(ZERG_CORRUPTOR.id), new SC2UnitLink(TERRAN_VIKING.id)],
    new SC2Asset('assets/units/terran/thumbnail/battlecruiser.png', 'assets/units/terran/image/battlecruiser.jpg')
);