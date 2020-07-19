import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStopComponent } from './first-stop.component';

describe('FirstStopComponent', () => {
  let component: FirstStopComponent;
  let fixture: ComponentFixture<FirstStopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstStopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
