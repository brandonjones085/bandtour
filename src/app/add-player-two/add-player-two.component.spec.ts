import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayerTwoComponent } from './add-player-two.component';

describe('AddPlayerTwoComponent', () => {
  let component: AddPlayerTwoComponent;
  let fixture: ComponentFixture<AddPlayerTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlayerTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlayerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
