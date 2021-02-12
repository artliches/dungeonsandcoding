import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UvgBlackRulesComponent } from './uvg-black-rules.component';

describe('UvgBlackRulesComponent', () => {
  let component: UvgBlackRulesComponent;
  let fixture: ComponentFixture<UvgBlackRulesComponent>;

  beforeEach(async(() => {
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
