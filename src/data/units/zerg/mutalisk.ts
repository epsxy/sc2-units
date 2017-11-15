import { ATTR_BIOLOGICAL, ATTR_LIGHT } from '../../../model/const';
import { SC2Asset } from '../../../model/sc2asset';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Unit } from '../../../model/sc2unit';
import { SC2Attack, SC2Defence, SC2Sight, SC2Speed, SC2Target, SC2UnitInformation } from '../../../model/sc2unitinformation';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { ZERG_RACE } from '../../races/races';
import {
    PROTOSS_PHOENIX_ID,
    PROTOSS_VOID_RAY_ID,
    TERRAN_THOR_ID,
    TERRAN_VIKING_ID,
    ZERG_BROODLORD_ID,
    ZERG_CORRUPTOR_ID,
    ZERG_MUTALISK_ID,
} from '../const';


export const ZERG_MUTALISK = new SC2Unit(
    ZERG_MUTALISK_ID,
    'Mutalisk',
    ZERG_RACE,
    'The Mutalisk is an extremely fast air attack unit capable of attacking both air and ' +
    'ground units. The Mutalisk\'s projectile, called "Glaive Wurm", hits the target and ' +
    'then two subsequent targets (each for a third of the damage of the previous hit). ' +
    'Mutalisks make effective scouts and skirmishers, able to slow/disrupt mining operations, ' +
    'incoming forces, or enemy expansions.',
    new SC2Cost(100, 100, 24, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND, SC2Target.AIR],
        [ATTR_LIGHT, ATTR_BIOLOGICAL],
        [new SC2Attack([SC2Target.GROUND, SC2Target.AIR], '9', '8.26', '1.09', '3')],
        new SC2Defence('120', '0', '1'),
        null,
        new SC2Speed('5.6'),
        new SC2Sight('11'),
        null
    ),
    null,
    // new SC2Source(HATCHERY, KEY_T),
    null,
    [new SC2UnitLink(TERRAN_VIKING_ID), new SC2UnitLink(ZERG_BROODLORD_ID), new SC2UnitLink(PROTOSS_VOID_RAY_ID)],
    [new SC2UnitLink(TERRAN_THOR_ID), new SC2UnitLink(ZERG_CORRUPTOR_ID), new SC2UnitLink(PROTOSS_PHOENIX_ID)],
    new SC2Asset('assets/units/zerg/thumbnail/mutalisk.png', 'assets/units/zerg/image/mutalisk.jpg')
);