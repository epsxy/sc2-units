import { SC2Unit } from '../../../model/sc2unit';
import { PROTOSS_RACE } from '../../races/races';
import { SC2Cost } from '../../../model/sc2cost';
import {
    SC2Cargo,
    SC2CargoType,
    SC2Defence,
    SC2Energy,
    SC2Sight,
    SC2Speed,
    SC2Target,
    SC2UnitInformation,
} from '../../../model/sc2unitinformation';
import { ATTR_BIOLOGICAL, ATTR_LIGHT, ATTR_PSIONIC, GATEWAY, KEY_T } from '../../../model/const';
import { SC2Source, SourceType } from '../../../model/sc2source';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const PROTOSS_HIGH_TEMPLAR = new SC2Unit(
    'fa2fdf4c-68c0-4e7f-b484-65f03fb93582',
    'High Templar',
    PROTOSS_RACE,
    'The High Templar (often abbreviated to HT) is a spell-casting unit for the Protoss. ' +
    'The High Templar is warped in from a Gateway, with the Templar Archives as a prerequisite. ' +
    'High Templar can cast Feedback to damage and drain the energy of enemy ' +
    'spellcasters. After an upgrade, High Templar can cast the devastating Psionic ' +
    'Storm spell, wreaking damage to all units in an area of effect. Finally, ' +
    'any two High Templar and/or Dark Templar can merge to form an Archon.',
    new SC2Cost(50, 150, 39, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_LIGHT, ATTR_BIOLOGICAL, ATTR_PSIONIC],
        [],
        new SC2Defence('40', '40', '0'),
        new SC2Energy('50', '200'),
        new SC2Speed('2.62'),
        new SC2Sight('10'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '2')
    ),
    null,
    new SC2Source(GATEWAY, SourceType.BUILDING, KEY_T),
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/protoss/thumbnail/high-templar.png', 'assets/units/protoss/image/high-templar.jpg')
);