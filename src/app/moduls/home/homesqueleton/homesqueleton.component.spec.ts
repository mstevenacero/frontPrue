import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesqueletonComponent } from './homesqueleton.component';

describe('HomesqueletonComponent', () => {
  let component: HomesqueletonComponent;
  let fixture: ComponentFixture<HomesqueletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomesqueletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesqueletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
