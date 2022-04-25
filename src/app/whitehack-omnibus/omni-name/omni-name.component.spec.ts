import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmniNameComponent } from './omni-name.component';

describe('OmniNameComponent', () => {
  let component: OmniNameComponent;
  let fixture: ComponentFixture<OmniNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmniNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmniNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
