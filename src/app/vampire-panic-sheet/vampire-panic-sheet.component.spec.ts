import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VampirePanicSheetComponent } from './vampire-panic-sheet.component';

describe('VampirePanicSheetComponent', () => {
  let component: VampirePanicSheetComponent;
  let fixture: ComponentFixture<VampirePanicSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VampirePanicSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VampirePanicSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
