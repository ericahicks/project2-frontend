import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationVudComponent } from './reservation-vud.component';

describe('ReservationVudComponent', () => {
  let component: ReservationVudComponent;
  let fixture: ComponentFixture<ReservationVudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationVudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationVudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
