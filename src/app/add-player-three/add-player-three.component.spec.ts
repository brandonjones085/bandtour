import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayerThreeComponent } from './add-player-three.component';

describe('AddPlayerThreeComponent', () => {
  let component: AddPlayerThreeComponent;
  let fixture: ComponentFixture<AddPlayerThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlayerThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlayerThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
