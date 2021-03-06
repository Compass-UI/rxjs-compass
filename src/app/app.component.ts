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
  flags
  constructor(private http: HttpClient){
    /**
     * No internet connectivity: 
     * 
     * HttpErrorResponse {headers: HttpHeaders, status: 0, statusText: "Unknown Error", url: null, ok: false, …}
     * XHR failed loading: GET "<URL>".
     */
    this.http.get('https://restcountries.eu/rest/v2/all')
      .subscribe(
        (value) => {
          // console.log(value.name)
          this.countries = value;
          console.log(value)
          console.log(value[0].name) // Will work
          console.log(value[1].name) // Will work
        
          /**
           * Will not work
           * console.log(value.map(
           * e => console.log(e[0].name)
           * ))
           */
        }
      )
  }

  numbers = [1,2,3,60]
  source = from(this.numbers)
  mource = Observable.create(observer => {
    for (let n of this.numbers){
      observer.next(n)
      console.log(`Values keep coming ${n}`)
    }
    if(this.index<this.numbers.length){
      setTimeout(() => {
        this.valuesOverTime(observer)
      }, 2000);
    }else{
      observer.complete();
    }
    // observer.complete();
    console.log('COMPLETE')
    
  })
// }).map(e => e * 10)  // ERROR TypeError: rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable.create(...).map is not a function

  index = 0
  valuesOverTime(observer){
       observer.next(this.numbers[this.index++])
  }

  ngOnInit(){
    this.source.subscribe(new MyObserver())  /** TODO: unsubscribe */
    this.source.subscribe(new MyObserver())  /** TODO: unsubscribe */
    this.source.subscribe(  /** TODO: unsubscribe */
      value => console.log(value),
      (e) => console.log(e),
      () => console.log('complete')
    )
    this.mource.subscribe(e=>console.log(e))  /** TODO: unsubscribe */
    // this.countries.map(e => console.log(e.flag))
    // console.log(this.countries); // Will not work because it is an observable
    /**
     * this.countries.subscribe(
     * e => console.log(e) // Will not work
     * )
     */
  }

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