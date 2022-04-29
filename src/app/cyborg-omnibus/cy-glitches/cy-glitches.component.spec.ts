import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyGlitchesComponent } from './cy-glitches.component';

describe('CyGlitchesComponent', () => {
  let component: CyGlitchesComponent;
  let fixture: ComponentFixture<CyGlitchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyGlitchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyGlitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
