import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaltiComponent } from './balti.component';

describe('BaltiComponent', () => {
  let component: BaltiComponent;
  let fixture: ComponentFixture<BaltiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaltiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaltiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
