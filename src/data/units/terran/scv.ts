import { SC2Asset } from '../../../model/sc2asset';
import { SC2Cost } from '../../../model/sc2cost';
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
import { TERRAN_RACE } from '../../races/races';
import { TERRAN_SCV_ID } from '../const';


export const TERRAN_SCV = new SC2Unit(
    TERRAN_SCV_ID,
    'SCV',
    TERRAN_RACE,
    'The SCV (Space Construction Vehicle) is the Terran worker unit. It harvests resources, ' +
    'constructs buildings and can repair all Terran mechanical units and buildings. As a ' +
    'building is constructed, the SCV must remain at the site until complete. If the building SCV ' +
    'is killed, the building\'s construction will halt. Building SCVs can be given queued assignments ' +
    'such as mining minerals and even constructing more buildings. If an SCV builds a Refinery it will ' +
    'automatically start mining gas unless it has been given another command in the queue.',
    new SC2Cost(50, 0, 12, 1),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [],
        [new SC2Attack([SC2Target.GROUND], '5', '4.67', '1.07', '0.1')],
        new SC2Defence('45', '0', '0'),
        null,
        new SC2Speed('3.94'),
        new SC2Sight('8'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '1')
    ),
    null,
    null,
    [],
    [],
    new SC2Asset('assets/units/terran/thumbnail/scv.png', 'assets/units/terran/image/scv.jpg')
);