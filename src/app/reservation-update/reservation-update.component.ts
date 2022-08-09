import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResrvationInfoDto } from '../models/reservation-info-dto';
import { ReservationService } from '../reservation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Roomtype } from '../models/roomtype';
import { RoomtypeService } from '../roomtype.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reservation-update',
  templateUrl: './reservation-update.component.html',
  styleUrls: ['./reservation-update.component.css']
})
export class ReservationUpdateComponent implements OnInit {

  reservation?: ResrvationInfoDto;
  resid?: string;
  roomtypes?: Roomtype[];
  form = new FormGroup({
    roomtypes: new FormControl(this.roomtypes)
  })

  constructor(private router: Router,
              private route: ActivatedRoute, 
              private reservationService: ReservationService, 
              private roomtypeService: RoomtypeService,
              private location: Location) { }

  ngOnInit(): void {

    this.roomtypeService.getRoomTypes().subscribe(data => this.roomtypes = data);

    this.route.queryParams.subscribe(params => {
      this.resid = params['resid'];
    });

    console.log("Hi, I'm the update component :) I see that the resid is " + this.resid);
    if (this.resid) {
      console.log("   looks like we have a resid! So I am going to ask the backend for the reservation for you! You're Welcome :)");
      this.reservationService.getReservationById(Number(this.resid)).subscribe(data => this.reservation = data);
      console.log("    I got the reesrvation from the database! It is " + JSON.stringify(this.reservation));
    } 

    // move the reservation's roomtype to the start of the array
    // roomtype id is the index
      console.log(JSON.stringify(this.roomtypes))
    if (this.reservation && this.roomtypes) {
      console.log(JSON.stringify(this.roomtypes))
    const fromIndex = this.reservation!.roomTypeId - 1; // change to 0 offset
    let element = this.roomtypes[fromIndex];
    this.roomtypes?.splice(fromIndex, 1); // remove it
    this.roomtypes?.splice(0, 0, element);
    console.log(JSON.stringify(this.roomtypes));
  }


  }

  back(): void {
    this.location.back();
  }
  
  update() {
    if (this.reservation)
      this.reservationService.updateReservation(this.reservation).subscribe(data => this.reservation = data);
    else
      console.log("Something went wrong. Sorry, I wasn't able to update the reservation. My bad - update.copmonent.ts");
  }

  
  // @Input() theReservation?: ResrvationInfoDto; // is the selected reservation to update
  // @Output() changeTheReservation = new EventEmitter<ResrvationInfoDto>();

  // @Input() selectedReservation?: ResrvationInfoDto; // maps to parent's selected reservation
  // @Output() changeSelectedReservation = new EventEmitter<ResrvationInfoDto>();

  // returnToView(): void {
  //   this.selectedReservation = undefined;
  //   this.changeSelectedReservation.emit(undefined); // deselect and return to VIEW list of existing revs page
  // }

  // reset(): void {
  //   this.theReservation = undefined;
  //   this.changeTheReservation.emit(undefined); // deselect and return to SEARCH for existing revs page
  // }

  // update(reservation: ResrvationInfoDto) {
  //   console.log("updating the reservation - hi I'm the reservation update component");
  //   console.log("the dates are checking at " + this.theReservation?.checkin + " and checkout at " + this.theReservation?.checkout);
  //   this.reservationService.updateReservation(reservation).subscribe(data => {
  //     this.theReservation = data; 
  //     console.log(data); 
  //     if (confirm('Thing was saved to database.')) {
  //       // show the list component
  //     } else {
  //       // stay on update form
  //     }
  //   });
  //   this.changeTheReservation.emit(this.theReservation);
  // }

}
