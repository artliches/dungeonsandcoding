import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UvgBlackSheetComponent } from './uvg-black-sheet.component';

describe('UvgBlackSheetComponent', () => {
  let component: UvgBlackSheetComponent;
  let fixture: ComponentFixture<UvgBlackSheetComponent>;

  beforeEach(waitForAsync(() => {
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
