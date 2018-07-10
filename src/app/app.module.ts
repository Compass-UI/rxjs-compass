import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsOperatorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    // HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
