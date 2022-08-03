import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReesrvationInfoDto } from '../models/reservation-info-dto';
import { User } from '../models/user';
import { ReservationService } from '../reservation.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reservation-vud',
  templateUrl: './reservation-vud.component.html',
  styleUrls: ['./reservation-vud.component.css']
})
export class ReservationVudComponent implements OnInit {

  theReservation?: ReesrvationInfoDto;
  resrvationInfoDto?: ReesrvationInfoDto[];
  users: User[];

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
  }

  clearResById() {
    this.theReservation = undefined;
  }

}
