import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmniJobComponent } from './omni-job.component';

describe('OmniJobComponent', () => {
  let component: OmniJobComponent;
  let fixture: ComponentFixture<OmniJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmniJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmniJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
