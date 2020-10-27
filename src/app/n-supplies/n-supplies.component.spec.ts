import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NSuppliesComponent } from './n-supplies.component';

describe('NSuppliesComponent', () => {
  let component: NSuppliesComponent;
  let fixture: ComponentFixture<NSuppliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NSuppliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NSuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
