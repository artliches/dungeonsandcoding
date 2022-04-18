import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhStatsComponent } from './wh-stats.component';

describe('WhStatsComponent', () => {
  let component: WhStatsComponent;
  let fixture: ComponentFixture<WhStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
