import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
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
        .pipe(
          catchError(this.handleError)
        );
   }

   getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.baseUrl + this.apiUrl)
 }

   getReservationById(id: number): Observable<ResrvationInfoDto> {
     return this.http.get<ResrvationInfoDto>(this.baseUrl + this.apiUrl + "/" + id)
      .pipe(
        catchError(this.handleError)
      );
   }

   getReservationsByEmail(email: string): Observable<ResrvationInfoDto[]> {
    return this.http.post<ResrvationInfoDto[]>(this.baseUrl + this.apiUrl + "/user", email)
      .pipe(
        catchError(this.handleError)
      );
   }

   getReservationsByUserId(userid: number): Observable<ResrvationInfoDto[]> {
    return this.http.get<ResrvationInfoDto[]>(this.baseUrl + this.apiUrl + "/user/" + userid)
      .pipe(
        catchError(this.handleError)
      );
   }

   updateReservation(theReservation: ResrvationInfoDto): Observable<ResrvationInfoDto> {
    console.log("hi I'm the reservation service - gotcha. updating the reservation");
    return this.http.put<ResrvationInfoDto>(this.baseUrl + this.apiUrl + "/" + theReservation.reservationId, theReservation)
      .pipe(
        catchError(this.handleError)
      );
   }

   deleteReservation(id: number): Observable<unknown> {
    console.log("Hi, I'm the reservation Service at your service! I'm here to do the deleting of that pesky reservation #" + id);
    console.log("I'm sending the request to " + this.baseUrl + this.apiUrl + "/" + id);
    return this.http.delete<string>(this.baseUrl + this.apiUrl + "/" + id, {observe: 'response'})
      .pipe(
        catchError(this.handleError)
      );
   }

   postReservation(reservation:ResrvationInfoDto): Observable<ResrvationInfoDto>{
    console.log("Hello I am the Create a New Reservation Service. A new reservation coming right up!")
    return this.http.post<ResrvationInfoDto>(this.baseUrl + this.apiUrl + "/new" , reservation)


   } 

   private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
