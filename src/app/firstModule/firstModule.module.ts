import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    ...COMPONENTS
  ],
  imports: [
    BrowserModule
  ],
  exports: [
      ...COMPONENTS
  ],
  entryComponents: COMPONENTS
})
export class FirstModule {}
