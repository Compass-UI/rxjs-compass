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
    let index = 0
    let source = Observable.create(observer => {
      observer.next(this.countries[index++])
      // observer.next()
    })
    source.subscribe(
      val=> console.log(val),
      (error) => console.log(error),
      () => console.log('complete')
    )
  }

}
