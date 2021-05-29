import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenDutyDayComponent } from './citizen-duty-day.component';

describe('CitizenDutyDayComponent', () => {
  let component: CitizenDutyDayComponent;
  let fixture: ComponentFixture<CitizenDutyDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenDutyDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenDutyDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
