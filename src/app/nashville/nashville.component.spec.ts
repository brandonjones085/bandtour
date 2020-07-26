import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NashvilleComponent } from './nashville.component';

describe('NashvilleComponent', () => {
  let component: NashvilleComponent;
  let fixture: ComponentFixture<NashvilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NashvilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NashvilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
