import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFeatureShellComponent } from './main-feature-shell.component';

describe('MainFeatureShellComponent', () => {
  let component: MainFeatureShellComponent;
  let fixture: ComponentFixture<MainFeatureShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainFeatureShellComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFeatureShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
