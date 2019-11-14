import { Injectable } from '@angular/core';
import { Game } from './game';
import { StoreService } from './store/store.service';
import { StaffService } from './staff.service';
import { Person } from './Person';
import { Story } from './Story';
import { Project } from './Project';
import { StoreItem } from './store/StoreItem';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  startingMoney = 100;
  game: Game;

  constructor(private storeService: StoreService, private staffService: StaffService) {
  }

  setup() { 
    this.game = new Game();
    this.game.Money = this.startingMoney;
    this.game.HighestMoney = this.startingMoney;
    this.game.Inflation = 1.3; // 30 %
    this.game.SmallInflation = 1.05; // 5 %
    this.game.MediumInflation = 1.10; // 10 %
    this.game.HyperInflation = 3; //300%
    this.game.Level = 1;
    this.game.XP = 0;
    this.game.TotalXP = 0;
    this.game.LevelUpXP = 40; //this grows by game.Inflation % each time (in function LevelUp)
    this.game.PointPrice = 25;
    this.game.ProjectSize = 6;
    this.game.LeadPrice = 100;
    this.game.NextId = 0;
    this.game.People = new Map<string, Person>()
    this.game.Stories = new Map<string, Story>()
    this.game.Projects = new Map<string, Project>()
    this.game.StoreItems = new Map<number, StoreItem>();
    this.game.Items = new Map<number, StoreItem>();
    this.game.SelectedDoer = null;
    this.game.SelectedReceiver = null;
    this.game.DefaultSelfStartDelay = 3000; //3 second pause between polling the board.
    this.game.AnimalTendingDelay = 2600;
  }
  
}
