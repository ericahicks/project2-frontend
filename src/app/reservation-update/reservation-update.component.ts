import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResrvationInfoDto } from '../models/reservation-info-dto';

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

  constructor() { }

  ngOnInit(): void {
  }

}
