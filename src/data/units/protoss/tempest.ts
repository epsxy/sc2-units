import { PROTOSS_TEMPEST_ID } from '../const';
import { SC2Unit } from '../../../model/sc2unit';
import { PROTOSS_RACE } from '../../races/races';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Attack, SC2Defence, SC2Sight, SC2Speed, SC2Target, SC2UnitInformation } from '../../../model/sc2unitinformation';
import { ATTR_ARMORED, ATTR_MASSIVE, ATTR_MECHANICAL, KEY_T, STARGATE } from '../../../model/const';
import { SC2Source, SourceType } from '../../../model/sc2source';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const PROTOSS_TEMPEST = new SC2Unit(
    PROTOSS_TEMPEST_ID,
    'Tempest',
    PROTOSS_RACE,
    'The Tempest is a powerful capital ship for the Protoss that can be built from the Stargate ' +
    'once the Fleet Beacon has been completed. Its primary role is as a heavy bombardment unit, ' +
    'using its incredible range to attack air and ground targets from a safe distance. ',
    new SC2Cost(300, 200, 43, 6),
    new SC2UnitInformation(
        [SC2Target.GROUND, SC2Target.AIR],
        [ATTR_ARMORED, ATTR_MECHANICAL, ATTR_MASSIVE],
        [
            new SC2Attack([SC2Target.GROUND], '40', '16.97', '2.36', '10'),
            new SC2Attack([SC2Target.AIR], '30', '12.73', '2.36', '15')
        ],
        new SC2Defence('300', '150', '2'),
        null,
        new SC2Speed('2.62'),
        new SC2Sight('12'),
        null
    ),
    null,
    new SC2Source(STARGATE, SourceType.BUILDING, KEY_T),
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/protoss/thumbnail/tempest.png', 'assets/units/protoss/image/tempest.jpg')
);