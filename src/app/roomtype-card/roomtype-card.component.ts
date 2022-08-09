import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Roomtype } from '../models/roomtype';
import { RoomtypeService } from '../roomtype.service';

@Component({
  selector: 'app-roomtype-card',
  templateUrl: './roomtype-card.component.html',
  styleUrls: ['./roomtype-card.component.css']
})
export class RoomtypeCardComponent implements OnInit {

  type?: Roomtype;
  typeid?: number;
  checkin?: Date;
  checkout?: Date;
  available?: number;

  @Output() checkoutRoom = new EventEmitter<Roomtype>();

  constructor(private router: Router, private roomtypeService: RoomtypeService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Get param values
    this.route.queryParams.subscribe(params => {
      this.typeid = params['typeid'];
      let checkinString = params['checkin'];
      let checkoutString = params['checkout'];
      this.checkin = new Date(checkinString);
      this.checkout = new Date(checkoutString);
    });
    console.log("Hi! I'm roomtype-card.component.ts ^x^ I see that typeid is " 
      + this.typeid + " and checkin is " + this.checkin + " and checkout is " + this.checkout);
    // get the the roomtype object from the db using the roomtype id
    if (this.typeid)
      this.roomtypeService.getRoomTypeById(this.typeid).subscribe(data => this.type = data);
    // get the available rooms number from the db using the roomtype id and the checkin checkout dates
    if (this.typeid && this.checkin && this.checkout)
      this.roomtypeService.getAvailableRoomsCount(this.typeid, this.checkin, this.checkout).subscribe(data => this.available = data );
  }

  showCheckout(typeid: string, checkin: Date, checkout: Date) {
    console.log("Hi I'm room-card.ts! I have showCheckout with typeid = " + typeid);
    console.log("                                               checkin = " + checkin.toString());
    console.log("                                               checkin = " + checkout.toString());
    this.router.navigate(
      ['checkout2'], 
      {queryParams: { typeid: typeid, checkin: checkin.toDateString(), checkout: checkout.toDateString() } } 
    ); // WILL THIS WORK?
  }
  
}
