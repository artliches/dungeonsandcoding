import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyEquipComponent } from './cy-equip.component';

describe('CyEquipComponent', () => {
  let component: CyEquipComponent;
  let fixture: ComponentFixture<CyEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyEquipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
