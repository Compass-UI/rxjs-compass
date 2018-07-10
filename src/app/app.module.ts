import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { MarbleBeadsDirective } from './marble-beads.directive';
import { MarbleBeadsComponent } from './marble-beads/marble-beads.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsOperatorsComponent,
    MarbleBeadsDirective,
    MarbleBeadsComponent
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
