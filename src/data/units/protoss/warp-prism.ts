import { PROTOSS_WARP_PRISM_ID } from '../const';
import { SC2Unit } from '../../../model/sc2unit';
import { PROTOSS_RACE } from '../../races/races';
import { SC2Cost } from '../../../model/sc2cost';
import {
    SC2Cargo,
    SC2CargoType,
    SC2Defence,
    SC2Sight,
    SC2Speed,
    SC2UnitInformation,
} from '../../../model/sc2unitinformation';
import { ATTR_ARMORED, ATTR_MECHANICAL, ATTR_PSIONIC, KEY_A, ROBOTICS } from '../../../model/const';
import { SC2Source, SourceType } from '../../../model/sc2source';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const PROTOSS_WARP_PRISM = new SC2Unit(
    PROTOSS_WARP_PRISM_ID,
    'Warp Prism',
    PROTOSS_RACE,
    'The Warp Prism is a Protoss transport unit, produced at the Robotics Facility. In Legacy of the ' +
    'Void, it can pickup units from a larger distance (6 range away). The Warp Prism can shuttle up ' +
    'to eight cargo of Protoss units while in Transport Mode (see table below). Unlike other transports, ' +
    'the Warp Prism can convert to Phasing Mode, which renders it stationary while it provides the ' +
    'Psionic Matrix in an area around it. This allows units from Warp Gates to warp in around ' +
    'the Warp Prism, and it can even allow buildings to be powered or warped in without ' +
    'the need for a nearby Pylon.',
    new SC2Cost(200, 0, 36, 2),
    new SC2UnitInformation(
        [],
        [ATTR_ARMORED, ATTR_MECHANICAL, ATTR_PSIONIC],
        null,
        new SC2Defence('80', '100', '0'),
        null,
        new SC2Speed('4.13'),
        new SC2Sight('10'),
        new SC2Cargo(SC2CargoType.INCLUDE_OTHER_UNITS, '8')
    ),
    null,
    new SC2Source(ROBOTICS, SourceType.BUILDING, KEY_A),
    [],
    [],
    new SC2Asset('assets/units/protoss/thumbnail/warp-prism.png', 'assets/units/protoss/image/warp-prism.jpg')
);