import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UpperPipePipe } from './../generalComponents/pipes/upper-pipe.pipe';
import { BkgColorDirective } from './../generalComponents/directives/bkg-color.directive';

import {
    ChildComponent,
    ParentComponent
  } from './';

export const COMPONENTS = [
    ChildComponent,
    ParentComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    UpperPipePipe,
    BkgColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
      ...COMPONENTS
  ],
  entryComponents: COMPONENTS
})
export class FirstModule {}
