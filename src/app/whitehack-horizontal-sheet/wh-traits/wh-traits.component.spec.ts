import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhTraitsComponent } from './wh-traits.component';

describe('WhTraitsComponent', () => {
  let component: WhTraitsComponent;
  let fixture: ComponentFixture<WhTraitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhTraitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhTraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
