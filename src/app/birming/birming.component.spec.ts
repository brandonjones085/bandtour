import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirmingComponent } from './birming.component';

describe('BirmingComponent', () => {
  let component: BirmingComponent;
  let fixture: ComponentFixture<BirmingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirmingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirmingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
