import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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



  reservationForm! :FormGroup;

 // reservation = new Reservation();

  reservations: Reservation[] = [];
  //users: User[];
  saveNewUser: User = new User;

  roomNumber: string = '218';
  checkin: Date = new Date(2022,8,4);
  checkout: Date = new Date(2022, 8, 11);

  firstName: string = 'Emmanuel';
  lastName: string = 'Amir';
  number: string = '123332222';
  email: string = 'yahoboyz@gmail.com';



  constructor( private formBuilder: FormBuilder,private reservationService: ReservationService, private userService: UserService) { 
    //this.users = []; 
    //this.reservations = [];
   // this.reservation = {};

  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({

      firstName: ['', Validators.required],
      
      lastName: ['', Validators.required],
      
      number: ['',Validators.required],
      
      email: ['', Validators.required],
      
      roomNumber: ['', Validators.required],
      
      checkin: ['', Validators.required],

      checkout: ['', Validators.required],
      
      });


    this.reservationService.getReservations().subscribe((data) =>{
      this.reservations = data;
    //  data.forEach(rest=>{
      //  this.reservationForm.controls['firstName'].setValue(rest.users.firstName)
      //});
      //
      console.log(this.reservations);
    });
    
  }
  // postUsers(): void {
  //   this.userService.postUser(this.saveNewUser).subscribe(data=>{
  //     console.log(data);

  //   });
  // }
 
  postReservations(){
    const reservation = new Reservation(0, 
      new User(0,this.reservationForm.controls['firstName'].value,this.reservationForm.controls['lastName'].value,
       this.reservationForm.controls['number'].value,this.reservationForm.controls['email'].value
        ),this.reservationForm.controls['roomNumber'].value, this.reservationForm.controls['checkin'].value, 
        this.reservationForm.controls['checkout'].value
      );
    //this.reservation.users = this.saveNewUser;


   // this.reservation.roomnumber =this.reservationForm.controls['roomNumber'].value;
   
    // this.reservation.checkin = this.reservationForm.controls['checkin'].value;
    // this.reservation.checkout = this.reservationForm.controls['checkout'].value;
    // this.reservation.users.firstName= this.reservationForm.controls['firstName'].value;
    // this.reservation.users.lastName= this.reservationForm.controls['lastName'].value;
    // this.reservation.users.number= this.reservationForm.controls['phonenumber'].value;
    // this.reservation.users.email=this.reservationForm.controls['email'].value;
    console.log(reservation);
   this.reservationService.postReservation(reservation).subscribe(data =>{
      console.log(data);

    });
  }

  

}
