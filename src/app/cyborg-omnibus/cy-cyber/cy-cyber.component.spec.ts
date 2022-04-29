import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyCyberComponent } from './cy-cyber.component';

describe('CyCyberComponent', () => {
  let component: CyCyberComponent;
  let fixture: ComponentFixture<CyCyberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyCyberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyCyberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
