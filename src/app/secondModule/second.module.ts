import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
    ExternalComponent
  } from './';

export const COMPONENTS = [
    ExternalComponent
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
export class SecondModule {}
