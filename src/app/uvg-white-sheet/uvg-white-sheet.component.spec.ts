import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UvgWhiteSheetComponent } from './uvg-white-sheet.component';

describe('UvgWhiteSheetComponent', () => {
  let component: UvgWhiteSheetComponent;
  let fixture: ComponentFixture<UvgWhiteSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UvgWhiteSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UvgWhiteSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});