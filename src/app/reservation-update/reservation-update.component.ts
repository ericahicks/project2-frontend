import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResrvationInfoDto } from '../models/reservation-info-dto';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-update',
  templateUrl: './reservation-update.component.html',
  styleUrls: ['./reservation-update.component.css']
})
export class ReservationUpdateComponent implements OnInit {

  @Input() theReservation?: ResrvationInfoDto;
  @Output() changeTheReservation = new EventEmitter<ResrvationInfoDto>();
  reset(): void {
    this.theReservation = undefined;
    this.changeTheReservation.emit(this.theReservation);
  }

  update(reservation: ResrvationInfoDto) {
    console.log("updating the reservation - hi I'm the reservation update component");
    this.reservationService.updateReservation(reservation).subscribe(data => this.theReservation = data);
    this.changeTheReservation.emit(this.theReservation);
  }

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
  }

}
