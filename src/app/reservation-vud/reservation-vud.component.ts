import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { User } from '../models/user';
import { ReservationService } from '../reservation.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reservation-vud',
  templateUrl: './reservation-vud.component.html',
  styleUrls: ['./reservation-vud.component.css']
})
export class ReservationVudComponent implements OnInit {

  reservation?: Reservation;
  reservations?: Reservation[];
  users: User[];

  constructor(private reservationService: ReservationService, private userService: UserService) { 
    this.users = []; 
    this.reservations = [];
  }

  ngOnInit(): void {
    this.getUsers();
    this.getReservations();
  }

  getReservations(): void {
    this.reservationService.getReservations().subscribe(data => this.reservations = data);
  }

  getUsers(): void {
    // this.userService.getUsers().subscribe(data => this.users = data);
    this.userService.getUsers().subscribe(data => this.users = data);
  }

}
