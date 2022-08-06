import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Reservation } from './models/reservation';
import { ResrvationInfoDto } from './models/reservation-info-dto';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  baseUrl: string = environment.apiURL;
  apiUrl: string = "/reservations"
  createreservation = "/createreservation"

  constructor(private http: HttpClient) { }

   getReservationsInfo(): Observable<ResrvationInfoDto[]> {
      return this.http.get<ResrvationInfoDto[]>(this.baseUrl + this.apiUrl)
   }

   getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.baseUrl + this.apiUrl)
 }

   getReservationById(id: number): Observable<ResrvationInfoDto> {
     return this.http.get<ResrvationInfoDto>(this.baseUrl + this.apiUrl + "/" + id);
   }

   getReservationsByEmail(email: string): Observable<ResrvationInfoDto[]> {
    return this.http.post<ResrvationInfoDto[]>(this.baseUrl + this.apiUrl + "/user", email);
   }

   getReservationsByUserId(userid: number): Observable<ResrvationInfoDto[]> {
    return this.http.get<ResrvationInfoDto[]>(this.baseUrl + this.apiUrl + "/user/" + userid);
   }

   updateReservation(theReservation: ResrvationInfoDto): Observable<ResrvationInfoDto> {
    console.log("hi I'm the reservation service - gotcha. updating the reservation");
    return this.http.put<ResrvationInfoDto>(this.baseUrl + this.apiUrl + "/" + theReservation.reservationId, theReservation);
   }

   deleteReservation(id: number): void {
    this.http.delete(this.baseUrl + this.apiUrl + id);
   }
   postReservation(reservation:Reservation): Observable<Reservation>{
    return this.http.post<Reservation>(this.baseUrl + this.apiUrl +this.createreservation, reservation)
   } 
}
