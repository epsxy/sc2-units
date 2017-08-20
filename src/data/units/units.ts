import { PROTOSS_RACE, TERRAN_RACE, ZERG_RACE } from '../races/races';
import { SC2Race } from '../../model/sc2races';
import { SC2Unit } from "../../model/sc2unit";

export const SC2_UNITS = [
    new SC2Unit('40afdbd9-9b18-455d-9b54-d55c568685ec', 'Probe', PROTOSS_RACE, 'Recolteur des protoss', null, null, null, null),
    new SC2Unit('99eb6ce7-b9d7-401a-ae87-69d4a7317b8a', 'Probe', PROTOSS_RACE, 'Recolteur des protoss', null, null, null, null),
    new SC2Unit('51365784-a83d-4b13-b201-cc9b47832665', 'Probe', PROTOSS_RACE, 'Recolteur des protoss', null, null, null, null),
    new SC2Unit('696afffa-a536-4360-a737-a0ca28e25471', 'Zerg probe', ZERG_RACE, 'Recolteur des zerg', null, null, null, null),
    new SC2Unit('1342531e-45e0-4d18-b6bd-bad14609514d', 'Terran probe', TERRAN_RACE, 'Recolteur des terran', null, null, null, null)
]
