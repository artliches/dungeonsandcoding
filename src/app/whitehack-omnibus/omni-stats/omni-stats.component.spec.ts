import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmniStatsComponent } from './omni-stats.component';

describe('OmniStatsComponent', () => {
  let component: OmniStatsComponent;
  let fixture: ComponentFixture<OmniStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmniStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmniStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
