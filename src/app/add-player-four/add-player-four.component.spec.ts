import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayerFourComponent } from './add-player-four.component';

describe('AddPlayerFourComponent', () => {
  let component: AddPlayerFourComponent;
  let fixture: ComponentFixture<AddPlayerFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlayerFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlayerFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
