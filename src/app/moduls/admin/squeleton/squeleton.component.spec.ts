import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqueletonComponent } from './squeleton.component';

describe('SqueletonComponent', () => {
  let component: SqueletonComponent;
  let fixture: ComponentFixture<SqueletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqueletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqueletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
