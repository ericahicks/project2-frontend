import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Reservation } from './models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  baseUrl: string = environment.apiURL;
  apiUrl: string = "/reservations"
  createreservation = "/createreservation"

  constructor(private http: HttpClient) { }

   getReservations(): Observable<Reservation[]> {
      return this.http.get<Reservation[]>(this.baseUrl + this.apiUrl)
   }
   postReservation(reservation:Reservation): Observable<Reservation>{
    return this.http.post<Reservation>(this.baseUrl + this.apiUrl +this.createreservation, reservation)
   } 
}
