import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyCombatComponent } from './cy-combat.component';

describe('CyCombatComponent', () => {
  let component: CyCombatComponent;
  let fixture: ComponentFixture<CyCombatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyCombatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyCombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
