import { ATTR_LIGHT, ATTR_MECHANICAL, KEY_E, NEXUS } from '../../../model/const';
import { SC2Asset } from '../../../model/sc2asset';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Source, SourceType } from '../../../model/sc2source';
import { SC2Unit } from '../../../model/sc2unit';
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
import { PROTOSS_RACE } from '../../races/races';
import { PROTOSS_PROBE_ID } from '../const';


export const PROTOSS_PROBE = new SC2Unit(
    PROTOSS_PROBE_ID,
    'Probe',
    PROTOSS_RACE,
    'The Probe is the Protoss worker unit, warped in at the Nexus. ' +
    'It harvests resources, has a low-powered melee attack, and can ' +
    'warp-in any Protoss building.',
    new SC2Cost(50, 0, 12, 1),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_LIGHT, ATTR_MECHANICAL],
        [new SC2Attack([SC2Target.GROUND], '5', '4.67', '1.07', '0.1')],
        new SC2Defence('20', '20', '0'),
        null,
        new SC2Speed('3.94'),
        new SC2Sight('8'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '1')
    ),
    null,
    new SC2Source(NEXUS, SourceType.BUILDING, KEY_E),
    [],
    [],
    new SC2Asset('assets/units/protoss/thumbnail/probe.png', 'assets/units/protoss/image/probe.jpg')
);