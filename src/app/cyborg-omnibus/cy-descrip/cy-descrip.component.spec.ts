import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyDescripComponent } from './cy-descrip.component';

describe('CyDescripComponent', () => {
  let component: CyDescripComponent;
  let fixture: ComponentFixture<CyDescripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyDescripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyDescripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
