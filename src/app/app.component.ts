import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { from } from 'rxjs/operators';
import { Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit(){
    this.source.subscribe(new MyObserver())

  }

  numbers = [1,2,3,60]
  source = from(this.numbers)
}

class MyObserver {
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