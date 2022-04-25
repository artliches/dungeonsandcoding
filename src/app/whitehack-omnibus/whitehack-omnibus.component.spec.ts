import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitehackOmnibusComponent } from './whitehack-omnibus.component';

describe('WhitehackOmnibusComponent', () => {
  let component: WhitehackOmnibusComponent;
  let fixture: ComponentFixture<WhitehackOmnibusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhitehackOmnibusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitehackOmnibusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
