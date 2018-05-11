import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FirstModule } from './firstModule/firstModule.module';

import { SecondModule } from './secondModule/second.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FirstModule,
    SecondModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
