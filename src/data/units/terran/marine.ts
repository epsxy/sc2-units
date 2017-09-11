import { SC2Unit } from '../../../model/sc2unit';
import { TERRAN_RACE } from '../../races/races';
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
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const TERRAN_MARINE = new SC2Unit(
    'c1871f19-cd83-4f3c-a8fd-ca663d384cee',
    'Marine',
    TERRAN_RACE,
    'Marines are the all-purpose infantry unit produced from a Barracks with a Reactor. Having the ' +
    'quickest and cheapest production of all Terran units make the Mineral backbone that scales very ' +
    'well with Stimpack Engineering Bay upgrades and Medivacs from the Starport. Before Stimpack, ' +
    'Marines are less than effective against Zerglings and Zealots; at least one Bunker and Supply ' +
    'Depots to wall-off is recommended for the early game.',
    new SC2Cost(50, 0, 18, 1),
    new SC2UnitInformation(
        [SC2Target.GROUND, SC2Target.AIR],
        [],
        [new SC2Attack([SC2Target.GROUND, SC2Target.AIR], '6', '9.8', '0.61', '5')],
        new SC2Defence('45', '0', '0'),
        null,
        new SC2Speed('3.15'),
        new SC2Sight('9'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '1')
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/terran/thumbnail/marine.png', 'assets/units/terran/image/marine.jpg')
);