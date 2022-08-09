import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ResrvationInfoDto } from '../models/reservation-info-dto';
import { User } from '../models/user';
import { ReservationService } from '../reservation.service';
import { UserService } from '../user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { Location } from '@angular/common';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-reservation-vud',
  templateUrl: './reservation-vud.component.html',
  styleUrls: ['./reservation-vud.component.css']
})
export class ReservationVudComponent implements OnInit {

  constructor(private reservationService: ReservationService, 
              private userService: UserService,
              private router: Router,
              private location: Location
             ) { }

  ngOnInit(): void { }

  showReservations(id: string) {
    console.log("Hi I'm vud.ts! I have showReservation with id = " + id);
    this.router.navigate(
      ['view'], 
      {queryParams: { id: id } } 
    ); // WILL THIS WORK?
  }

  clearReservations() {
    this.router.navigate(['reservations']); // WILL THIS WORK?
  }

  findUserAndShowReservations(email: string) {
    console.log("Hi I'm vud.ts! I have findUserAndShowReservations with email = " + email);
    if (email) {
      this.userService.getUserIdByEmail(email).subscribe(id => {
        console.log("db sent back userid of " + id);
        this.router.navigate(
          ['view'], 
          {queryParams: { userid: id } } // opening the list view
      ); // WILL THIS WORK?
      }
      );
    } else {
      console.log("no email entered. please enter an email."); // TODO make validation span below input
    }
  }

}
