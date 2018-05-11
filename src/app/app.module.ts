import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FirstModule } from './firstModule/firstModule.module';

import { SecondModule } from './secondModule/second.module';
import { LivecyclesComponent } from './livecycles/livecycles.component';

@NgModule({
  declarations: [
    AppComponent,
    LivecyclesComponent
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
