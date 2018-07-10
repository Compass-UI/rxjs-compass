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

  constructor(private http: HttpClient){
    
  }
  ngOnInit(){
    this.source.subscribe(new MyObserver())
    this.source.subscribe(new MyObserver())
  }

  numbers = [1,2,3,60]
  source = from(this.numbers)
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