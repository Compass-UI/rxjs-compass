import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
// import { from } from 'rxjs/operators';
import { Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  countries

  constructor(private http: HttpClient){
    this.http.get('https://restcountries.eu/rest/v2/all')
      .subscribe(
        (value) => {
          // console.log(value.name)
          this.countries = value
        }
      )
    
  }
  ngOnInit(){
    this.source.subscribe(new MyObserver())
    this.source.subscribe(new MyObserver())
    this.source.subscribe(
      value => console.log(value),
      (e) => console.log(e),
      () => console.log('complete')
    )
    this.mource.subscribe(e=>console.log(e))
  }

  numbers = [1,2,3,60]
  source = from(this.numbers)
  mource = Observable.create(observer => {
    for (let n of this.numbers){
      observer.next(n)
      console.log(`Values keep coming ${n}`)
    }
    observer.complete();
    console.log('COMPLETE')
  })
}

class MyObserver implements Observer<number>{
  next(value) {
    console.log(`value: ${value}`)
  }

  error(e){
    console.log(`Error occured ${e}`)
  }

  complete(){
    console.log('complete')
  }
}