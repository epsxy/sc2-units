import { ATTR_BIOLOGICAL, ATTR_LIGHT, HATCHERY, KEY_C } from '../../../model/const';
import { SC2Asset } from '../../../model/sc2asset';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Source, SourceType } from '../../../model/sc2source';
import { SC2Unit } from '../../../model/sc2unit';
import { SC2Attack, SC2Defence, SC2Sight, SC2Speed, SC2Target, SC2UnitInformation } from '../../../model/sc2unitinformation';
import { ZERG_RACE } from '../../races/races';
import { ZERG_LOCUST_ID } from '../const';


export const ZERG_LOCUST = new SC2Unit(
    ZERG_LOCUST_ID,
    'Locust',
    ZERG_RACE,
    'The Locust is a timed life unit that is spawned in pairs by a Swarm Host. After ' +
    'spawning, Locusts begin in their flying form, and though unable to attack, can ' +
    'fly over terrain and use the Swoop ability to land and engage targets. The Spawn ' +
    'Locust ability has a cooldown of 43 seconds after birthing Locusts.',
    new SC2Cost(0, 0, 3.6, 0),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_LIGHT, ATTR_BIOLOGICAL],
        [new SC2Attack([SC2Target.GROUND], '10', '23.25', '0.43', '6')],
        new SC2Defence('50', '0', '0'),
        null,
        new SC2Speed('2.62'),
        new SC2Sight('6'),
        null
    ),
    null,
    new SC2Source(HATCHERY, SourceType.BUILDING, KEY_C),
    [],
    [],
    new SC2Asset('assets/units/zerg/thumbnail/locust.png', 'assets/units/zerg/image/locust.jpg')
);