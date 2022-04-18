import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhNameComponent } from './wh-name.component';

describe('WhNameComponent', () => {
  let component: WhNameComponent;
  let fixture: ComponentFixture<WhNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
