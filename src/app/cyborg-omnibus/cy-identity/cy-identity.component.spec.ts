import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyIdentityComponent } from './cy-identity.component';

describe('CyIdentityComponent', () => {
  let component: CyIdentityComponent;
  let fixture: ComponentFixture<CyIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyIdentityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
