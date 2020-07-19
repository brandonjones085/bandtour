import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSuppliesComponent } from './view-supplies.component';

describe('ViewSuppliesComponent', () => {
  let component: ViewSuppliesComponent;
  let fixture: ComponentFixture<ViewSuppliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSuppliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
