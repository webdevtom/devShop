import { Injectable } from '@angular/core';
import { StoreItem } from './StoreItem';
import { ItemCode } from './ItemCode';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  allItems: StoreItem[] = 
    [
      { id: 10, level: 2, name: 'Tasty donut', price: 5, icon: "🍩", skillneeded: "any", busy: false, code: ItemCode.donut, activeDuration: 10, description: 'A sugary fix will speed you up... but not for long.', enabled: false },
      { id: 12, level: 2, name: 'Mechanical keyboard upgrade', price: 400, icon: "⌨", skillneeded: "any", busy: false, code: ItemCode.keyboard, activeDuration: 30, description: 'This mechanical keyboard upgrade will boost your speed at every task.', enabled: false },
      { id: 20, level: 3, name: 'Upskill Developer: Efficiency Development Series', price: 120, icon: "📗", skillneeded: "dev", busy: false, code: ItemCode.upskillDev, activeDuration: 0, description: 'Already a developer? This advanced training course will reduce the number of bugs you create.', enabled: false },
      { id: 40, level: 3, name: 'Cup of coffee', price: 10, icon: "☕", skillneeded: "any", busy: false, code: ItemCode.coffee, activeDuration: 30, description: 'A cup of joe will speed up any worker ...if only for a little while.', enabled: false },
      { id: 50, level: 4, name: 'Upskill Tester: Fast and Thorough Book Series', price: 70, icon: "📘", skillneeded: "test", busy: false, code: ItemCode.upskillTest, activeDuration: 0, description: 'Already a tester? Be a better tester!', enabled: false },
      { id: 90, level: 4, name: 'Pizza', price: 50, icon: "🍕", skillneeded: "any", busy: false, code: ItemCode.pizza, activeDuration: 50, description: 'Trap your workers in the office by giving them no reason to leave', enabled: false },
      { id: 100, level: 4, name: 'Banana', price: 25, icon: "🍌", skillneeded: "any", busy: false, code: ItemCode.banana, activeDuration: 20, description: 'This healthy snack gives a short-lived energy boost', enabled: false },
      { id: 105, level: 4, name: 'Cupcake', price: 100, icon: "🧁", skillneeded: "any", busy: false, code: ItemCode.cupcake, activeDuration: 10, description: 'A cupcake to enjoy. Increase motivation, but not for long.', enabled: false },
      { id: 107, level: 5, name: 'Upskill BA: Powerful communication book series', price: 70, icon: "📕", skillneeded: "ba", busy: false, code: ItemCode.upskillBA, activeDuration: 0, description: 'Improves your Business Analysis Skills, for faster better work!', enabled: false },
      { id: 110, level: 5, name: 'Self-Starter', price: 500, icon: "🚀", skillneeded: "any", busy: false, code: ItemCode.selfstart, activeDuration: 0, description: 'When you\'re idle, go and check the board to see if there is anything you can do.', enabled: false },
      { id: 120, level: 5, name: 'Office Cat', price: 5000, icon: "🐱", skillneeded: "any", busy: false, code: ItemCode.cat, activeDuration: 200, description: 'This friendly feline will vastly improve the quality of one person\'s work at a time.', enabled: false },
      { id: 130, level: 5, name: 'Observation Training', price: 200, icon: "🕵️‍♀️", skillneeded: "any", busy: false, code: ItemCode.observe, activeDuration: 0, description: 'When a person finishes a card, train them to look for another card. If trained multiple times, they will look for multiple cards.', enabled: false },
      { id: 150, level: 6, name: 'Seat upgrade', price: 400, icon: "💺", skillneeded: "any", busy: false, code: ItemCode.seat, activeDuration: 0, description: 'A comfortable seat upgrade makes any worker more efficient.', enabled: false },
      { id: 160, level: 7, name: 'Office Dog', price: 6000, icon: "🐶", skillneeded: "any", busy: false, code: ItemCode.dog, activeDuration: 200, description: 'Bring joy and efficiency to the workplace. Care for a dog and double your speed', enabled: false },
      { id: 170, level: 8, name: 'Piece of Toast', price: 10, icon: "🍞", skillneeded: "any", busy: false, code: ItemCode.toast, activeDuration: 15, description: 'It\'s a piece of toast. How much could it be?', enabled: false },
      { id: 180, level: 10, name: 'Coffee machine', price: 4000, icon: "⛽", skillneeded: "any", busy: false, code: ItemCode.coffeemachine, activeDuration: 0, description: 'A coffee machine at your desk, your performance will be irreparably improved.', enabled: false },
      { id: 200, level: 11, name: 'Inspirational poster', price: 30000, icon: "🌄", skillneeded: "any", busy: false, code: ItemCode.poster, activeDuration: 0, description: 'Enhance your cubicle and improve your concentration.', enabled: false },
      { id: 220, level: 15, name: 'Mystical Statue', price: 40000, icon: "🗿", skillneeded: "any", busy: false, code: ItemCode.statue2, activeDuration: 0, description: 'Mystical statue improves your workplace.', enabled: false },
      { id: 300, level: 18, name: 'Awe inspiring statue', price: 80000, icon: "🗽", skillneeded: "any", busy: false, code: ItemCode.statue, activeDuration: 0, description: 'Can this statue fill your workplace with wonder, joy and hard work?', enabled: false },
      { id: 350, level: 21, name: 'Crystal ball', price: 100000, icon: "🔮", skillneeded: "any", busy: false, code: ItemCode.crystalball, activeDuration: 0, description: 'This crystal ball does not tell the future, but it\'s a nice desk ornament.', enabled: false },
    ];

  constructor() { }

  getAllLevelItems(): Map<string, StoreItem[]> {
    // These are the items that become available in the store at each level.
    // Note that skillneeded includes the special value "any" which means it can be applied to any person.
    // TODO: ?? There could be a 'must not have skill' property... e.g. Beginning Development (only for non-developers)
    // The 'code' property is used in `function useIt` to decide how the card affects the player.

    const minLevel = 1;
    const maxLevel = Math.max.apply(Math, this.allItems.map(t => t.level));
    const map = new Map<string, StoreItem[]>();

    for(let n=minLevel;n<maxLevel;n++) { 
      let items = this.allItems.filter(t => t.level === n) || []; 
      map.set(`l${n}`, items)
    }
    
    return map;
  }
}
