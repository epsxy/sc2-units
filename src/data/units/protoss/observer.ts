import { SC2Unit } from '../../../model/sc2unit';
import { PROTOSS_RACE } from '../../races/races';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Defence, SC2Sight, SC2Speed, SC2UnitInformation } from '../../../model/sc2unitinformation';
import { ATTR_DETECTOR, ATTR_LIGHT, ATTR_MECHANICAL, KEY_B, ROBOTICS } from '../../../model/const';
import { SC2Source, SourceType } from '../../../model/sc2source';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const PROTOSS_OBSERVER = new SC2Unit(
    '16a3798f-f30d-4514-abc8-2baae2373318',
    'Observer',
    PROTOSS_RACE,
    'The Observer is a flying cloaked spy drone and Detector for the Protoss, ' +
    'built at the Robotics Facility. It is permanently cloaked, so opponents ' +
    'need detection in order to see and kill the Observer.',
    new SC2Cost(25, 75, 21, 1),
    new SC2UnitInformation(
        [],
        [ATTR_LIGHT, ATTR_MECHANICAL, ATTR_DETECTOR],
        [],
        new SC2Defence('40', '20', '0'),
        null,
        new SC2Speed('2.62'),
        new SC2Sight('11'),
        null
    ),
    null,
    new SC2Source(ROBOTICS, SourceType.BUILDING, KEY_B),
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/protoss/thumbnail/observer.png', 'assets/units/protoss/image/observer.jpg')
);