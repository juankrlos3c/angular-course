import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FirstModule } from './firstModule/firstModule.module';
import { SecondModule } from './secondModule/second.module';
import { Routes, RouterModule } from '@angular/router';
import {
  ParentComponent
} from './firstModule';

import {
  ExternalComponent
} from './secondModule';

const appRoutes: Routes = [{
  path: '', redirectTo: '/parent', pathMatch: 'full'
},
{ path: 'parent', component: ParentComponent },
{ path: 'external', component: ExternalComponent }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FirstModule,
    SecondModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
