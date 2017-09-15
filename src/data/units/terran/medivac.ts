import { ATTR_ARMORED, ATTR_MECHANICAL } from '../../../model/const';
import { SC2Asset } from '../../../model/sc2asset';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Unit } from '../../../model/sc2unit';
import {
    SC2Cargo,
    SC2CargoType,
    SC2Defence,
    SC2Energy,
    SC2Sight,
    SC2Speed,
    SC2UnitInformation,
} from '../../../model/sc2unitinformation';
import { TERRAN_RACE } from '../../races/races';
import { TERRAN_MEDIVAC_ID } from '../const';


export const TERRAN_MEDIVAC = new SC2Unit(
    TERRAN_MEDIVAC_ID,
    'Medivac',
    TERRAN_RACE,
    'A dual purpose Dropship and Healer (12.6 Health per second) and can be produced right away ' +
    'from the Starport with the Ignite Afterburners ability ready right away. Ignite Afterburners ' +
    'increases the Medivacs movement speed to 5.94 (faster than a Mutalisk and equal to a Phoenix) ' +
    'for a quick escape or running past anti-air units and defence.',
    new SC2Cost(100, 100, 30, 2),
    new SC2UnitInformation(
        [],
        [ATTR_ARMORED, ATTR_MECHANICAL],
        [],
        new SC2Defence('150', '0', '1'),
        new SC2Energy('50', '200'),
        new SC2Speed('3.5'),
        new SC2Sight('11'),
        new SC2Cargo(SC2CargoType.INCLUDE_OTHER_UNITS, '8')
    ),
    null,
    null,
    [],
    [],
    new SC2Asset('assets/units/terran/thumbnail/medivac.png', 'assets/units/terran/image/medivac.jpg')
);