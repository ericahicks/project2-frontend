import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResrvationInfoDto } from '../models/reservation-info-dto';
import { Roomtype } from '../models/roomtype';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
