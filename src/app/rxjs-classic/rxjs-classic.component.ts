import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ual-rxjs-classic',
  templateUrl: './rxjs-classic.component.html',
  styleUrls: ['./rxjs-classic.component.css']
})
export class RxjsClassicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const button = document.querySelector('button');
    button.addEventListener('click', console.log('Clicked!'));
  }

}
