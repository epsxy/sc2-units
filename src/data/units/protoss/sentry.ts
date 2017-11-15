import { ATTR_LIGHT, ATTR_MECHANICAL, ATTR_PSIONIC, GATEWAY, KEY_E } from '../../../model/const';
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
import { PROTOSS_RACE } from '../../races/races';
import {
    PROTOSS_SENTRY_ID,
    PROTOSS_STALKER_ID,
    PROTOSS_ZEALOT_ID,
    TERRAN_REAPER_ID,
    ZERG_HYDRALISK_ID,
    ZERG_ZERGLING_ID,
} from '../const';


export const PROTOSS_SENTRY = new SC2Unit(
    PROTOSS_SENTRY_ID,
    'Sentry',
    PROTOSS_RACE,
    'The Sentry is an unusual Protoss spell-casting unit produced from the ' +
    'Gateway after the Cybernetics Core has been built. The Sentry\'s spells ' +
    'are very powerful: Force Field, Guardian Shield, and Hallucination. ' +
    'These spells — Force Field in particular - are considered essential ' +
    'capabilities in almost all Protoss strategies.',
    new SC2Cost(50, 100, 26, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_LIGHT, ATTR_MECHANICAL, ATTR_PSIONIC],
        [new SC2Attack([SC2Target.GROUND], '8', '18.6', '0.86', '0.1')],
        new SC2Defence('100', '50', '1'),
        new SC2Energy('50', '200'),
        new SC2Speed('3.15'),
        new SC2Sight('10'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '2')
    ),
    null,
    new SC2Source(GATEWAY, SourceType.BUILDING, KEY_E),
    [new SC2UnitLink(ZERG_ZERGLING_ID), new SC2UnitLink(PROTOSS_ZEALOT_ID)],
    [new SC2UnitLink(TERRAN_REAPER_ID), new SC2UnitLink(ZERG_HYDRALISK_ID), new SC2UnitLink(PROTOSS_STALKER_ID)],
    new SC2Asset('assets/units/protoss/thumbnail/sentry.png', 'assets/units/protoss/image/sentry.jpg')
);