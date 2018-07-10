import { Component, OnInit } from '@angular/core';
import { Observable, observable } from '../../../node_modules/rxjs';
import { map, filter, switchMap } from 'rxjs/operators';


@Component({
  selector: 'ual-marble-beads',
  templateUrl: './marble-beads.component.html',
  styleUrls: ['./marble-beads.component.css']
})
export class MarbleBeadsComponent implements OnInit {
  public countries = ["Afghanistan", "USA", "Canada", "Russia"]
  observablecountries = []

  constructor() { }

  ngOnInit() {
    // console.log('ngOnInit')

    let source = Observable.create(observer => {

      // for(let n of this.countries){
      //   alert(`Observable.create: ${n}`)
      //   setTimeout(observer.next(n), 2000)
      // }
      // observer.complete()
      let index = 0
      let produceValue = () => {
        observer.next(this.countries[index++])
        if(index<this.countries.length){
          setTimeout(produceValue, 2000);
        }else{
          observer.complete()
        }

      }
      produceValue()
    }).map(c => `Country is: ${c}`)

    source.subscribe(
      value => { console.log(`Country is: ${value}`); this.observablecountries.push(`Country is: ${value}`) },
      e => console.log(`Error occured ${e}`),
      () => console.log('Complete')
    )

  }

}
