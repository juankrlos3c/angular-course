import { Component, OnInit, Input } from '@angular/core';
import { DoCheck, AfterContentChecked, AfterViewInit,
        AfterViewChecked, AfterContentInit, OnDestroy, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-livecycles',
  templateUrl: './livecycles.component.html',
  styleUrls: ['./livecycles.component.scss']
})
export class LivecyclesComponent implements OnChanges,
                                            OnInit,
                                            DoCheck,
                                            AfterViewInit,
                                            AfterViewChecked,
                                            AfterContentInit,
                                            AfterContentChecked,
                                            OnDestroy {

  constructor() {
    console.log('constructor');
  }

  @Input() inParameter;

  ngOnChanges() {
    console.log('ngOnChanges'); // is listening if a Input parameter has change
  }

  ngOnInit() {
    console.log('ngOnInit'); // just happens once when component complete
  }

  ngDoCheck () {
    console.log('ngDoCheck'); // if component has a change / listeners etc
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit'); // if template has been started
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked'); // whent a content template has change
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit'); // when children component has been load
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked'); // when children has have a change
  }

  ngOnDestroy() {
    console.log('ngOnDestroy'); // when the component has been destroyed
  }


}
