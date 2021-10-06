import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UvgBlackRulesComponent } from './uvg-black-rules.component';

describe('UvgBlackRulesComponent', () => {
  let component: UvgBlackRulesComponent;
  let fixture: ComponentFixture<UvgBlackRulesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UvgBlackRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UvgBlackRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
