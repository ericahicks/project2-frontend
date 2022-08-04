import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { User } from '../models/user';
import { ReservationService } from '../reservation.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reservation-vuds',
  templateUrl: './reservation-vuds.component.html',
  styleUrls: ['./reservation-vuds.component.css']
})
export class ReservationVudsComponent implements OnInit {
  reservation?: Reservation;
  reservations?: Reservation[];
  //users: User[];
  saveNewUser: User = new User;


  constructor(private reservationService: ReservationService, private userService: UserService) { 
    //this.users = []; 
    this.reservations = [];
    this.reservation = {};

  }

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe((data) =>{
      this.reservations = data;
      console.log(this.reservations);
    });
    
  }
  postUsers(): void {
    this.userService.postUser(this.saveNewUser).subscribe(data=>{
      console.log(data);

    });
  }
 
  // postReservations(): void{
  //   this.reservationService.postReservation(this.reservation).subscribe(data =>{
  //     console.log(data);
  //   });
  // }

  

}
