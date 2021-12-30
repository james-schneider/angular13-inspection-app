import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInspectionComponent } from './show-inspection.component';

describe('ShowInspectionComponent', () => {
  let component: ShowInspectionComponent;
  let fixture: ComponentFixture<ShowInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowInspectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
