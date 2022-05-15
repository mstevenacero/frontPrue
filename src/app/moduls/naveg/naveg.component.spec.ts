import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegComponent } from './naveg.component';

describe('NavegComponent', () => {
  let component: NavegComponent;
  let fixture: ComponentFixture<NavegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
