import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivecyclesComponent } from './livecycles.component';

describe('LivecyclesComponent', () => {
  let component: LivecyclesComponent;
  let fixture: ComponentFixture<LivecyclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivecyclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivecyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
