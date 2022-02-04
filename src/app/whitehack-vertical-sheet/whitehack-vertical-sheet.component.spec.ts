import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitehackVerticalSheetComponent } from './whitehack-vertical-sheet.component';

describe('WhitehackVerticalSheetComponent', () => {
  let component: WhitehackVerticalSheetComponent;
  let fixture: ComponentFixture<WhitehackVerticalSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhitehackVerticalSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitehackVerticalSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
