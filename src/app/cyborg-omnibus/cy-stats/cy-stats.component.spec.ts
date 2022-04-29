import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyStatsComponent } from './cy-stats.component';

describe('CyStatsComponent', () => {
  let component: CyStatsComponent;
  let fixture: ComponentFixture<CyStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
