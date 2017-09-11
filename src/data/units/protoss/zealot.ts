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
import { ATTR_LIGHT, ATTR_MECHANICAL, GATEWAY, KEY_Z } from '../../../model/const';
import { SC2Source, SourceType } from '../../../model/sc2source';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const PROTOSS_ZEALOT = new SC2Unit(
    '99eb6ce7-b9d7-401a-ae87-69d4a7317b8a',
    'Zealot',
    PROTOSS_RACE,
    'The first and strongest unit of direct army attacks. ' +
    'A strong brute-force unit and excellent mineral dump as well.',
    new SC2Cost(100, 0, 27, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_LIGHT, ATTR_MECHANICAL],
        [new SC2Attack([SC2Target.GROUND], '8', '18.6', '0.86', '0.1')],
        new SC2Defence('100', '50', '1'),
        null,
        new SC2Speed('3.15'),
        new SC2Sight('9'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '2')
    ),
    null,
    new SC2Source(GATEWAY, SourceType.BUILDING, KEY_Z),
    [
        new SC2UnitLink('f064ac69-e4c1-4d23-90dd-26002bba354f'),
        new SC2UnitLink('3a9fac08-2181-46d8-bedd-cd593e1f11cd'),
        new SC2UnitLink('c1a2f2ca-a586-4c4f-b40e-3485c0de8c20')
    ],
    [
        new SC2UnitLink('4100a23b-9d42-42b1-9958-06c022e85cc4'),
        new SC2UnitLink('d41fae3e-c6a7-4d84-81ed-0da67b9de9a5'),
        new SC2UnitLink('d2aba0bd-4644-4858-b235-db41f5bb5bab')
    ],
    new SC2Asset('assets/units/protoss/thumbnail/zealot.png', 'assets/units/protoss/image/zealot.jpg')
);