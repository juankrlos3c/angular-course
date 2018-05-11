import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    BrowserModule,
    FormsModule
  ],
  exports: [
      ...COMPONENTS
  ],
  entryComponents: COMPONENTS
})
export class FirstModule {}
