import { StoreItem } from './store/StoreItem';
import { SkillDetail } from './SkillDetail';

export interface Person {
    id: number;
    //skills: string[];
    skills: {
        [id: string]: SkillDetail;
    };
    name: string;
    summary: string;
    icon: string;
    //efficiency: number;
    XP: number;
    busy: boolean;
    observantLevel: number; // how observant is this person?
    observeNow: number; // this number counts down from observantLevel to 0, each time an extra story is grabbed off the board.
    selfStarterLevel: number;
    selfStartNow: number; // this number counts down from selfStartLevel to 0, each time they are looking for work to do.
    selfStartDelay: number; //how long they wait between polling the board (shorter numbers are faster)
    seatLevel: number; //how good is your seat?
    keyboardLevel: number; //how good is your keyboard?
    has: {
        [id: string]: StoreItem;
    }; // coffee, donuts and puppies go here.
}
