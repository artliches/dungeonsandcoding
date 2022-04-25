import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmniSpecialComponent } from './omni-special.component';

describe('OmniSpecialComponent', () => {
  let component: OmniSpecialComponent;
  let fixture: ComponentFixture<OmniSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmniSpecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmniSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
