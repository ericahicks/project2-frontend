import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  resid?: string;

  updatedReservation(reservation: ResrvationInfoDto | undefined) {
    if (reservation) {
      console.log('click');
      this.selectedReservation = reservation;
      this.selectedReservationChange.emit(this.selectedReservation);
    }
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>
      this.resid = params['resid'])
  }

}
