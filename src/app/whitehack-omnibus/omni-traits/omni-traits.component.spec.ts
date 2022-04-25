import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmniTraitsComponent } from './omni-traits.component';

describe('OmniTraitsComponent', () => {
  let component: OmniTraitsComponent;
  let fixture: ComponentFixture<OmniTraitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmniTraitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmniTraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
