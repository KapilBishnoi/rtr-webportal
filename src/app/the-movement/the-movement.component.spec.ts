import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMovementComponent } from './the-movement.component';

describe('TheMovementComponent', () => {
  let component: TheMovementComponent;
  let fixture: ComponentFixture<TheMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheMovementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
