import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhSlotsComponent } from './wh-slots.component';

describe('WhSlotsComponent', () => {
  let component: WhSlotsComponent;
  let fixture: ComponentFixture<WhSlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhSlotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
