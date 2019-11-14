import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  columns: {title: string}[];

  constructor() { 
    this.columns = [
      { title: 'Backlog' },
      { title: 'In Development' },
      { title: 'In Test' },
      { title: 'In QA' },
      { title: 'Done' },
    ]
  }

  ngOnInit() {
  }

}
