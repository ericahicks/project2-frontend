import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RoomSearchParamsDto } from './models/room-search-params-dto';
import { Roomtype } from './models/roomtype';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class RoomtypeService {

  http:HttpClient;
  private baseURL = environment.apiURL;
  private typesURL = "/roomtypes";


  constructor(http: HttpClient) { 
    this.http = http
  }

  getRoomTypes(): Observable<Roomtype[]> {
    return this.http.get<Roomtype[]>(this.baseURL + this.typesURL);
  }

  getRoomTypeById(id: number): Observable<Roomtype> {
    return this.http.get<Roomtype>(this.baseURL + this.typesURL + "/" + id);
  }

  getAvailableRoomsCount(id: number, checkin: Date, checkout: Date): Observable<number> {
    let searchParams  = new RoomSearchParamsDto(id, checkin, checkout);
    return this.http.post<number>(this.baseURL + "/rooms/available/count", searchParams);
  }
}
