import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyborgOmnibusComponent } from './cyborg-omnibus.component';

describe('CyborgOmnibusComponent', () => {
  let component: CyborgOmnibusComponent;
  let fixture: ComponentFixture<CyborgOmnibusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyborgOmnibusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyborgOmnibusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
