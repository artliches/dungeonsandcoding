import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhCombatComponent } from './wh-combat.component';

describe('WhCombatComponent', () => {
  let component: WhCombatComponent;
  let fixture: ComponentFixture<WhCombatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhCombatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhCombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
