import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UvgBlackSheetComponent } from './uvg-black-sheet.component';

describe('UvgBlackSheetComponent', () => {
  let component: UvgBlackSheetComponent;
  let fixture: ComponentFixture<UvgBlackSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UvgBlackSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UvgBlackSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
