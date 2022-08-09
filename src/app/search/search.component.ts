import { Component, OnInit } from '@angular/core';
import { RoomSearchParamsDto } from '../models/room-search-params-dto';
import { Roomtype } from '../models/roomtype';
import { RoomtypeService } from '../roomtype.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchby: RoomSearchParamsDto = new RoomSearchParamsDto(1, new Date(), new Date());
  types: Roomtype[] = [];

  constructor(private roomtypeService: RoomtypeService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.roomtypeService.getRoomTypes().subscribe(data =>  this.types = data);
  }

}
