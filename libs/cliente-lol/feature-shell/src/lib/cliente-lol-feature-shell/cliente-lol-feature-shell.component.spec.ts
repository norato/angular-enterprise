import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteLolFeatureShellComponent } from './cliente-lol-feature-shell.component';

describe('ClienteLolFeatureShellComponent', () => {
  let component: ClienteLolFeatureShellComponent;
  let fixture: ComponentFixture<ClienteLolFeatureShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClienteLolFeatureShellComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteLolFeatureShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
