import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ResrvationInfoDto } from '../models/reservation-info-dto';
import { User } from '../models/user';
import { ReservationService } from '../reservation.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reservation-vud',
  templateUrl: './reservation-vud.component.html',
  styleUrls: ['./reservation-vud.component.css']
})
export class ReservationVudComponent implements OnInit {

  theReservation?: ResrvationInfoDto; // hold reservation found by id
  resrvationInfoDto?: ResrvationInfoDto[]; // holds reservations found by email
  selectedReservation?: ResrvationInfoDto; // holds reservation selected to edit or delete
  users: User[]; // not used, testing purposees only

  constructor(private reservationService: ReservationService, private userService: UserService) { 
    this.users = []; 
    this.resrvationInfoDto = [];
  }

  ngOnInit(): void {
    // this.getUsers();
    // this.getReservations();
  }

  getReservations(): void {
    this.reservationService.getReservations().subscribe(data => this.resrvationInfoDto = data);
  }

  getUsers(): void {
    // this.userService.getUsers().subscribe(data => this.users = data);
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  getReservationById(id: string): void {
    this.reservationService.getReservationById(id).subscribe(data => this.theReservation = data);
    console.log(this.theReservation);
  }

  getReservationsByEmail(email: string): void {
    this.reservationService.getReservationsByEmail(email).subscribe(data => this.resrvationInfoDto = data )
  }

  clear() {
    this.resrvationInfoDto = undefined;
    this.theReservation = undefined;
    this.selectedReservation = undefined;
  }

}
