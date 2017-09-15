import { ATTR_ARMORED, ATTR_MECHANICAL } from '../../../model/const';
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
    PROTOSS_STALKER_ID,
    PROTOSS_VOID_RAY_ID,
    TERRAN_BATTLE_CRUISER_ID,
    TERRAN_MARINE_ID,
    TERRAN_VIKING_ID,
    ZERG_CORRUPTOR_ID,
    ZERG_MUTALISK_ID,
} from '../const';


export const TERRAN_VIKING = new SC2Unit(
    TERRAN_VIKING_ID,
    'Viking',
    TERRAN_RACE,
    'The Viking is an anti-air fighter with the ability to transform into an assault walker ' +
    '(the transformation taking four in-game seconds). The Viking is best utilized when supported ' +
    'by units which can protect the vikings from anti-air attacks from the ground. They are best suited ' +
    'for taking down strong, hard-hitting air units such as Void Rays, Corruptors, Tempests, but do not fare ' +
    'as well against lighter and faster units such as the Mutalisk or Phoenix. Vikings are produced from a Starport ' +
    '(with or without a reactor) and are generally produced in a set number as opposed to continuous production, in ' +
    'order to cost-effectively eliminate enemy air units without overspending resources which could be spent elsewhere.',
    new SC2Cost(150, 75, 30, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND, SC2Target.AIR],
        [ATTR_ARMORED, ATTR_MECHANICAL],
        [
            new SC2Attack([SC2Target.GROUND], '12', '16.8', '0.71', '6'),
            new SC2Attack([SC2Target.AIR], '10', '14', '1.43', '9')
        ],
        new SC2Defence('125', '0', '0'),
        new SC2Energy('0', '0'),
        new SC2Speed('3.15 (ground), 3.85 (air)'),
        new SC2Sight('10'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '2')
    ),
    null,
    null,
    [new SC2UnitLink(PROTOSS_VOID_RAY_ID), new SC2UnitLink(ZERG_CORRUPTOR_ID), new SC2UnitLink(TERRAN_BATTLE_CRUISER_ID)],
    [new SC2UnitLink(PROTOSS_STALKER_ID), new SC2UnitLink(ZERG_MUTALISK_ID), new SC2UnitLink(TERRAN_MARINE_ID)],
    new SC2Asset('assets/units/terran/thumbnail/viking.png', 'assets/units/terran/image/viking.jpg')
);