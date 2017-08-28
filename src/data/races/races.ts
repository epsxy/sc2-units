import { SC2Race, SC2RaceType } from '../../model/sc2races';

export const PROTOSS_RACE = new SC2Race('4220bdfe-7f81-41f9-977e-3f61bc5c8d1b', 'Protoss', SC2RaceType.PROTOSS, 'With their highly advanced technology and potent psionic abilities, the Protoss once considered themselves the most powerful species in the galaxy. The Protoss have never been a prolific people and have traditionally bolstered their numbers with a variety of robotic war machines. Individual Protoss warriors are unsurpassed in their skills, greatly enhanced by the combination of technology and formidable psionic strength.');
export const ZERG_RACE = new SC2Race('97652a6b-c352-4b5a-82fd-1289cab6b021', 'Zerg', SC2RaceType.ZERG, '');
export const TERRAN_RACE = new SC2Race('92189723-31e5-471d-84de-76ea0095522d', 'Terran', SC2RaceType.TERRAN, '');

export const SC2_RACES =  [
    PROTOSS_RACE,
    ZERG_RACE,
    TERRAN_RACE
]