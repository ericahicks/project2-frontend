import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reservation } from '../models/reservation';
import { ResrvationInfoDto } from '../models/reservation-info-dto';
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

  reservations!: ResrvationInfoDto;


 
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
    

  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({

      userid: ['',],

      firstName: ['', ],
      
      lastName: ['',],
      
      phoneNumber: ['',],
      
      email: ['', ],

      reservationId: ['', ],
      
      roomNumber: ['', ],
      
      checkin: ['', ],

      checkout: ['', ],
      
      });
    

    }
   
 
  postReservations(){
    console.log("Creating Reservation! Hi, I am the Create User Component!")

    const reservation1= new ResrvationInfoDto(this.reservationForm.controls['reservationId'].value,
    this.reservationForm.controls['roomNumber'].value,
    this.reservationForm.controls['checkin'].value,this.reservationForm.controls['checkout'].value,
    this.reservationForm.controls['userid'].value,this.reservationForm.controls['firstName'].value,
    this.reservationForm.controls['lastName'].value,this.reservationForm.controls['phoneNumber'].value,
    this.reservationForm.controls['email'].value, 1, "1 Queen Bed Standard Room", 115.00);
  



 
   
    console.log(this.reservations);
   this.reservationService.postReservation(reservation1).subscribe(data =>{
    this.reservations= data;
      console.log(data);
      alert("Your reservation has been Created. Thank you for booking with us, we hope you enjoy your stay! :-)")

    });
  }

  

}
