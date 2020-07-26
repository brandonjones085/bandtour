import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElPasoComponent } from './el-paso.component';

describe('ElPasoComponent', () => {
  let component: ElPasoComponent;
  let fixture: ComponentFixture<ElPasoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElPasoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElPasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
