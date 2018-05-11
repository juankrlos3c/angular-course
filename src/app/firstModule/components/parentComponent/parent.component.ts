import { Component, ViewChildren, ViewChild, QueryList } from '@angular/core';
import { IDataChild } from './../models/child.model';
import { ChildComponent } from '../childComponent/child.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent.template.html',
  styleUrls: ['./parent.template.scss']
})
export class ParentComponent {
  @ViewChildren('childComp') componentChildren: QueryList<ChildComponent>;
  @ViewChild(ChildComponent) componentChild: ChildComponent;
  title = 'parent';

  children: IDataChild[] = [{
    name: 'maria',
    age: 5
  }, {
    name: 'pepe',
    age: 2
  }, {
    name: 'sandra',
    age: 5
  }];

  greeting(phrase: string) {
   alert(phrase);
  }

  stopSayingHi(event: any) {
      this.componentChildren.forEach((child) => {
        child.parentSayStop = event.target.checked;
      });
  }

  stopSayingHiFirstChild(event: any) {
    this.componentChild.parentSayStop = event.target.checked;
  }
}
