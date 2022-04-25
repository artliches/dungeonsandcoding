import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmniSlotsComponent } from './omni-slots.component';

describe('OmniSlotsComponent', () => {
  let component: OmniSlotsComponent;
  let fixture: ComponentFixture<OmniSlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmniSlotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmniSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
