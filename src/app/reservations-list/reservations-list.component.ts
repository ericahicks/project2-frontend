import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ResrvationInfoDto } from '../models/reservation-info-dto';
import { ReservationService } from '../reservation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css']
})
export class ReservationsListComponent implements OnInit {

  reservations: ResrvationInfoDto[]; 
  resid: string;
  userid: string;

  constructor(private router: Router,
              private route: ActivatedRoute, 
              private reservationService: ReservationService, 
              private location: Location) { 
    this.resid = "";
    this.userid = "";
    this.reservations = [];
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.resid = params['id'];
      this.userid = params['userid'];
    });
    console.log("Hi! I'm list.component.ts ^x^ I see that resid is " + Number(this.resid) + " and userid is " + this.userid);
    if (this.resid) {
      this.reservationService.getReservationById(Number(this.resid)).subscribe(data => {this.reservations = [data]; console.log(" I got the reservation from the db! It is " + JSON.stringify(this.reservations))});
    } 
    if (this.userid) {
      this.reservationService.getReservationsByUserId(Number(this.userid)).subscribe(data => this.reservations = data);
    }
  }

  
  openUpdate(resid: number): void {
    console.log("Bye! I'm routing you to my friend the update.component ttyl. FYI the resid I'm sending is " + resid);
    this.router.navigate(
      ['update'], 
      {queryParams: { resid: resid } } 
    ); // WILL THIS WORK?
  }

  back(): void {
    this.location.back();
  }

  removeReservation(reservation: ResrvationInfoDto) {
    this.reservations = this.reservations?.filter(data => data.reservationId != reservation.reservationId);
  }


    // @Input() theReservation?: ResrvationInfoDto;
  // @Input() reservations?: ResrvationInfoDto[];
  // @Input() selectedReservation?: ResrvationInfoDto; // holds reservation selected to edit or delete
  // @Output() selectedReservationChange = new EventEmitter<ResrvationInfoDto>();
  // resid?: string;

  // updatedReservation(reservation: ResrvationInfoDto | undefined) {
  //   if (reservation) {
  //     console.log('click');
  //     this.selectedReservation = reservation;
  //     this.selectedReservationChange.emit(this.selectedReservation);
  //   }
  // }

}
