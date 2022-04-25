import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmniTitleComponent } from './omni-title.component';

describe('OmniTitleComponent', () => {
  let component: OmniTitleComponent;
  let fixture: ComponentFixture<OmniTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmniTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmniTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
