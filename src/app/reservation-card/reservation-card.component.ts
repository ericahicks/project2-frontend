import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResrvationInfoDto } from '../models/reservation-info-dto';
import { ReservationService } from '../reservation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.css']
})
export class ReservationCardComponent implements OnInit {

  @Input() reservation?: ResrvationInfoDto;

  @Output() deleteReservationEvent = new EventEmitter<ResrvationInfoDto>();



  constructor(private router: Router,
    private route: ActivatedRoute, 
    private reservationService: ReservationService, 
    private location: Location) { }
  

  ngOnInit(): void {
  }

  delete(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    console.log("DELETE ordered. Reservation to delete is " + this.reservation);
    if (this.reservation) {
      console.log("Hi, I'm the card.component. I see there is a reservation you'd like to delete. I'm going to tell the db. id = " + this.reservation.reservationId + " correct?");
      this.reservationService.deleteReservation(this.reservation.reservationId)
      .subscribe(data => console.log(JSON.stringify(data)));
    }
    // remove the card from the dom
    this.deleteReservationEvent.emit(this.reservation);
  }


}
