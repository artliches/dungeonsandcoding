import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitehackHorizontalComponent } from './whitehack-horizontal.component';

describe('WhitehackHorizontalComponent', () => {
  let component: WhitehackHorizontalComponent;
  let fixture: ComponentFixture<WhitehackHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhitehackHorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitehackHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
