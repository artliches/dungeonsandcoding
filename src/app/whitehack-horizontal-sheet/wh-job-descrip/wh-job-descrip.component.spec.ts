import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhJobDescripComponent } from './wh-job-descrip.component';

describe('WhJobDescripComponent', () => {
  let component: WhJobDescripComponent;
  let fixture: ComponentFixture<WhJobDescripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhJobDescripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhJobDescripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
