import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmniInventoryComponent } from './omni-inventory.component';

describe('OmniInventoryComponent', () => {
  let component: OmniInventoryComponent;
  let fixture: ComponentFixture<OmniInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmniInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmniInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
