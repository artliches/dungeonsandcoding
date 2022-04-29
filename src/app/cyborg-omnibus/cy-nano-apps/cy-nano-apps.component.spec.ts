import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyNanoAppsComponent } from './cy-nano-apps.component';

describe('CyNanoAppsComponent', () => {
  let component: CyNanoAppsComponent;
  let fixture: ComponentFixture<CyNanoAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyNanoAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyNanoAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
