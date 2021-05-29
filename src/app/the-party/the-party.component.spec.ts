import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThePartyComponent } from './the-party.component';

describe('ThePartyComponent', () => {
  let component: ThePartyComponent;
  let fixture: ComponentFixture<ThePartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThePartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThePartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
