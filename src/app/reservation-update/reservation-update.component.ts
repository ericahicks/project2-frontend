import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResrvationInfoDto } from '../models/reservation-info-dto';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-update',
  templateUrl: './reservation-update.component.html',
  styleUrls: ['./reservation-update.component.css']
})
export class ReservationUpdateComponent implements OnInit {

  @Input() theReservation?: ResrvationInfoDto; // is the selected reservation to update
  @Output() changeTheReservation = new EventEmitter<ResrvationInfoDto>();

  @Input() selectedReservation?: ResrvationInfoDto; // maps to parent's selected reservation
  @Output() changeSelectedReservation = new EventEmitter<ResrvationInfoDto>();

  returnToView(): void {
    this.selectedReservation = undefined;
    this.changeSelectedReservation.emit(undefined); // deselect and return to VIEW list of existing revs page
  }

  reset(): void {
    this.theReservation = undefined;
    this.changeTheReservation.emit(undefined); // deselect and return to SEARCH for existing revs page
  }

  update(reservation: ResrvationInfoDto) {
    console.log("updating the reservation - hi I'm the reservation update component");
    console.log("the dates are checking at " + this.theReservation?.checkin + " and checkout at " + this.theReservation?.checkout);
    this.reservationService.updateReservation(reservation).subscribe(data => {this.theReservation = data; console.log(data)});
    this.changeTheReservation.emit(this.theReservation);
  }

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
  }

}
