import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ResrvationInfoDto } from '../models/reservation-info-dto';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css']
})
export class ReservationsListComponent implements OnInit {

  @Input() theReservation?: ResrvationInfoDto;
  @Input() reservations?: ResrvationInfoDto[];
  @Input() selectedReservation?: ResrvationInfoDto; // holds reservation selected to edit or delete
  @Output() selectedReservationChange = new EventEmitter<ResrvationInfoDto>();

  updatedReservation(reservation: ResrvationInfoDto | undefined) {
    if (reservation) {
      console.log('click');
      this.selectedReservation = reservation;
      this.selectedReservationChange.emit(this.selectedReservation);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
