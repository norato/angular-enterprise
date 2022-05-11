import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteLolCalendarComponent } from './cliente-lol-calendar.component';

describe('ClienteLolCalendarComponent', () => {
  let component: ClienteLolCalendarComponent;
  let fixture: ComponentFixture<ClienteLolCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClienteLolCalendarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteLolCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
