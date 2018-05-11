import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IDataChild } from './../models/child.model';

@Component({
  selector: 'app-child-component',
  templateUrl: './child.template.html',
  styleUrls: ['./child.template.scss']
})
export class ChildComponent {
  title = 'children';
  parentSayStop = false;

  @Input() dataChild: IDataChild;
  @Output() sayHi = new EventEmitter<Object>();

  sayHiAction() {
      const greeting = `Hi, i am ${this.dataChild.name}`;
      this.sayHi.emit(greeting);
  }
}
