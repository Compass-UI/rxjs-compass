import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ual-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent implements OnInit {
  public countries = ["Afghanistan", "USA", "Canada", "Russia"]


  constructor() { }

  ngOnInit() {
    let source = Observable.create(observer => {
    let index = 0
    // let produceValue = ()=> {
      // observer.next(this.countries[index++])
      observer.next(this.countries)
      // observer.next()
      // if(index<this.countries.length){
        // setTimeout(produceValue(), 1000);
      // }else{
        // observer.complete()
      // }
    // }
    // produceValue()
    })

    source.subscribe( /** TODO: unsubscribe */
      val=> console.log(val),
      (error) => console.log(error),
      () => console.log('complete')
    )
  }

}
