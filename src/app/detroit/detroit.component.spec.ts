import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetroitComponent } from './detroit.component';

describe('DetroitComponent', () => {
  let component: DetroitComponent;
  let fixture: ComponentFixture<DetroitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetroitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetroitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
