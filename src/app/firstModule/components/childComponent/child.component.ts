import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IDataChild, IDataMessage } from './../models/child.model';

@Component({
  selector: 'app-child-component',
  templateUrl: './child.template.html',
  styleUrls: ['./child.template.scss']
})
export class ChildComponent {
  title = 'children';
  parentSayStop = false;
  textMessage = '';

  @Input() dataChild: IDataChild;
  @Output() sayHi = new EventEmitter<Object>();
  @Output() sayMessage = new EventEmitter<Object>();

  sayHiAction() {
      const greeting = `Hi, i am ${this.dataChild.name}`;
      this.sayHi.emit(greeting);
  }

  sendMessageToParent() {
    const message: IDataMessage = {
          name: this.dataChild.name,
          text: this.textMessage
    };
    this.sayMessage.emit(message);
    this.textMessage = '';
  }
}
