import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FirstModule } from './firstModule/firstModule.module';
import { SecondModule } from './secondModule/second.module';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LivecyclesComponent } from './livecycles/livecycles.component';
import {
  ParentComponent
} from './firstModule';
import {
  GuardService as AuthGuard
} from './_guards/guard.service';

import {
  ExternalComponent
} from './secondModule';

const appRoutes: Routes = [{
  path: '', redirectTo: '/parent', pathMatch: 'full'
},
{ path: 'parent', component: ParentComponent},
{ path: 'external', component: ExternalComponent},
{ path: '**', redirectTo: 'external' }
];


@NgModule({
  declarations: [
    AppComponent,
    LivecyclesComponent
  ],
  imports: [
    BrowserModule,
    FirstModule,
    SecondModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

// CanActivate to mediate navigation to a route.
// CanActivateChild to mediate navigation to a child route.
// CanDeactivate to mediate navigation away from the current route.
// Resolve to perform route data retrieval before route activation.
// CanLoad to mediate navigation to a feature module loaded asynchronously.
