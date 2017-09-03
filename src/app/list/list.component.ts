import { animate, state, style, transition, trigger, group } from '@angular/animations';
import { expand } from 'rxjs/operator/expand';
import { Component, OnInit } from '@angular/core';
type State = 'collapsed'| 'expanded';

interface Row {
  state: State;
  expanded: boolean;
  loaded: boolean;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [trigger(
    'openClose', // animate height from 20px to sizecontent and apply overflow hidden during aniation
    [
      state('collapsed, void', style({height: '20px'})),
      state('expanded', style({height: '*'})),
      transition(
        'collapsed => expanded', [ style({'overflow': 'hidden'}), animate(5000, style({height: '*'})) ]),
      transition(
        'expanded => collapsed', [ style({'overflow': 'hidden'}), animate(5000, style({height: '20px'})) ])
    ])],
})
export class ListComponent implements OnInit {
  list: Row[];
  constructor() { }

  ngOnInit() {
    this.list = [
      { state: 'collapsed', expanded: false, loaded: true },
      { state: 'collapsed', expanded: false, loaded: true },
      { state: 'collapsed', expanded: false, loaded: true },
      { state: 'collapsed', expanded: false, loaded: true },
      { state: 'collapsed', expanded: false, loaded: true },
      { state: 'collapsed', expanded: false, loaded: true },
      { state: 'collapsed', expanded: false, loaded: true },
      { state: 'collapsed', expanded: false, loaded: true },
      { state: 'collapsed', expanded: false, loaded: true },
      { state: 'collapsed', expanded: false, loaded: true },
      { state: 'collapsed', expanded: false, loaded: true }
    ];
  }

  expand (row: Row): void {
    row.expanded = true;
    row.state = 'expanded';
  }

  collapse (row: Row): void {
    row.state = 'collapsed';
    setTimeout(function() {
      row.expanded = false;
    }, 0);
  }

}
