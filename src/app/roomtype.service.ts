import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
}
