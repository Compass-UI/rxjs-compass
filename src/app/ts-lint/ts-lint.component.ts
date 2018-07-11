import { Component, OnInit } from '@angular/core';
import { Effect } from '@ngrx/effect';

@Component({
  selector: 'ual-ts-lint',
  templateUrl: './ts-lint.component.html',
  styleUrls: ['./ts-lint.component.css']
})
export class TsLintComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // ts-lint:disable-next-line:member-ordering
  // @Effect() // TODO
}
