import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'ual-marble-beads',
  templateUrl: './marble-beads.component.html',
  styleUrls: ['./marble-beads.component.css']
})
export class MarbleBeadsComponent implements OnInit {
  numbers = [1, 5, 10]

  constructor() { }

  ngOnInit() {
    // console.log('ngOnInit')

    let source = Observable.create(observer => {
      for(let n of this.numbers){
        observer.next(n)
      }
      observer.complete()
    })

    source.subscribe(
      value => console.log(`Country is: ${value}`),
      e => console.log(`Error occured ${e}`),
      () => console.log('Complete')
    )

  }

}
