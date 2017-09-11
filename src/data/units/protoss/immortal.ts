import { SC2Unit } from '../../../model/sc2unit';
import { PROTOSS_RACE } from '../../races/races';
import { SC2Cost } from '../../../model/sc2cost';
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
import { ATTR_ARMORED, ATTR_MECHANICAL, KEY_I, ROBOTICS } from '../../../model/const';
import { SC2Source, SourceType } from '../../../model/sc2source';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const PROTOSS_IMMORTAL = new SC2Unit(
    '3a9fac08-2181-46d8-bedd-cd593e1f11cd',
    'Immortal',
    PROTOSS_RACE,
    'The Immortal is a powerful, ranged, mechanized assault strider for the Protoss' +
    'army, produced at the Robotics Facility. Their Barrier ability makes them ' +
    'specialists at dealing with any high-powered armored unit whose attack deals ' +
    'a large amount of damage such as Siege Tanks, Ultralisks, or Marauders.',
    new SC2Cost(250, 100, 39, 4),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_ARMORED, ATTR_MECHANICAL],
        [new SC2Attack([SC2Target.GROUND], '20', '19.2', '1.04', '6')],
        new SC2Defence('200', '100', '1'),
        null,
        new SC2Speed('3.15'),
        new SC2Sight('9'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '4')
    ),
    null,
    new SC2Source(ROBOTICS, SourceType.BUILDING, KEY_I),
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/protoss/thumbnail/immortal.png', 'assets/units/protoss/image/immortal.jpg')
);
