import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhInventoryComponent } from './wh-inventory.component';

describe('WhInventoryComponent', () => {
  let component: WhInventoryComponent;
  let fixture: ComponentFixture<WhInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
