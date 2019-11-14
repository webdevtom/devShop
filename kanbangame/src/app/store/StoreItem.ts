import { ItemCode } from './ItemCode';

export interface StoreItem {
    id: number;
    name: string;
    level: number;
    price: number;
    icon: string;
    skillneeded: string;
    busy: boolean;
    code: ItemCode; //'code' is a short, readable, ID, such as 'dog' that is used in a switch statement somewhere for all the deep logic/capabilities of StoreItems... as they can ultimately do anything. TODO: consider an enum for this.
    //skillBoost: string; 
    //category: training/equipment
    description: string;
    activeDuration: number; //how long does the item act on the person? (0 for indefinitely)
    enabled: boolean;
}
