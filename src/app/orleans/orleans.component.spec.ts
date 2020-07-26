import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrleansComponent } from './orleans.component';

describe('OrleansComponent', () => {
  let component: OrleansComponent;
  let fixture: ComponentFixture<OrleansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrleansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrleansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
