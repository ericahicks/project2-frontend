import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationVudsComponent } from './reservation-vuds.component';

describe('ReservationVudsComponent', () => {
  let component: ReservationVudsComponent;
  let fixture: ComponentFixture<ReservationVudsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationVudsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationVudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
