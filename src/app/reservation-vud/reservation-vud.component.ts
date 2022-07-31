import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-vud',
  templateUrl: './reservation-vud.component.html',
  styleUrls: ['./reservation-vud.component.css']
})
export class ReservationVudComponent implements OnInit {

  reservation: Reservation = new Reservation();

  constructor() { }

  ngOnInit(): void {
  }

}
