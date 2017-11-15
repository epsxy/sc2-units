import { ATTR_DETECTOR, ATTR_LIGHT, ATTR_MECHANICAL, KEY_B, ROBOTICS } from '../../../model/const';
import { SC2Asset } from '../../../model/sc2asset';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Source, SourceType } from '../../../model/sc2source';
import { SC2Unit } from '../../../model/sc2unit';
import { SC2Defence, SC2Sight, SC2Speed, SC2UnitInformation } from '../../../model/sc2unitinformation';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { PROTOSS_RACE } from '../../races/races';
import { PROTOSS_DARK_TEMPLAR_ID, PROTOSS_OBSERVER_ID, TERRAN_BANSHEE_ID, ZERG_ROACH_ID } from '../const';


export const PROTOSS_OBSERVER = new SC2Unit(
    PROTOSS_OBSERVER_ID,
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
    [new SC2UnitLink(TERRAN_BANSHEE_ID), new SC2UnitLink(ZERG_ROACH_ID), new SC2UnitLink(PROTOSS_DARK_TEMPLAR_ID)],
    [],
    new SC2Asset('assets/units/protoss/thumbnail/observer.png', 'assets/units/protoss/image/observer.jpg')
);