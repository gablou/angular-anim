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
  styleUrls: ['./list.component.scss']
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
    row.expanded = false;
    row.state = 'collapsed';
  }

}
