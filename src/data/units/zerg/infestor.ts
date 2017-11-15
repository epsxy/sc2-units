import { ATTR_ARMORED, ATTR_BIOLOGICAL, ATTR_PSIONIC, HATCHERY, KEY_H } from '../../../model/const';
import { SC2Asset } from '../../../model/sc2asset';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Source, SourceType } from '../../../model/sc2source';
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
import { ZERG_RACE } from '../../races/races';
import {
    PROTOSS_HIGH_TEMPLAR_ID,
    PROTOSS_IMMORTAL_ID,
    TERRAN_GHOST_ID,
    TERRAN_MARINE_ID,
    ZERG_INFESTOR_ID,
    ZERG_MUTALISK_ID,
    ZERG_ULTRALISK_ID,
} from '../const';


export const ZERG_INFESTOR = new SC2Unit(
    ZERG_INFESTOR_ID,
    'Infestor',
    ZERG_RACE,
    'The Infestor is an offensive spellcaster, meaning that its abilities are used to ' +
    'harm enemy units rather than support the player\'s units. It can be built after the ' +
    'Zerg player has an Infestation Pit. Infestors have three abilities: Neural Parasite, ' +
    'Fungal Growth, and Infested Terran. They can move while burrowed if Burrow is researched, ' +
    'but with a small collision radius.',
    new SC2Cost(100, 150, 36, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND, SC2Target.AIR],
        [ATTR_ARMORED, ATTR_BIOLOGICAL, ATTR_PSIONIC],
        [new SC2Attack([SC2Target.GROUND, SC2Target.AIR], '12', '22.4', '0.54', '5')],
        new SC2Defence('90', '0', '0'),
        new SC2Energy('50', '200'),
        new SC2Speed('3.15'),
        new SC2Sight('10'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '2')
    ),
    null,
    new SC2Source(HATCHERY, SourceType.BUILDING, KEY_H),
    [new SC2UnitLink(TERRAN_MARINE_ID), new SC2UnitLink(ZERG_MUTALISK_ID), new SC2UnitLink(PROTOSS_IMMORTAL_ID)],
    [new SC2UnitLink(TERRAN_GHOST_ID), new SC2UnitLink(ZERG_ULTRALISK_ID), new SC2UnitLink(PROTOSS_HIGH_TEMPLAR_ID)],
    new SC2Asset('assets/units/zerg/thumbnail/infestor.png', 'assets/units/zerg/image/infestor.jpg')
);