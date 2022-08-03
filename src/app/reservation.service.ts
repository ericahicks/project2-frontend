import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Reservation } from './models/reservation';
import { ReesrvationInfoDto } from './models/reservation-info-dto';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  baseUrl: string = environment.apiURL;
  apiUrl: string = "/reservations"

  constructor(private http: HttpClient) { }

   getReservations(): Observable<ReesrvationInfoDto[]> {
      return this.http.get<ReesrvationInfoDto[]>(this.baseUrl + this.apiUrl)
   }

   getReservationById(id: string): Observable<ReesrvationInfoDto> {
     return this.http.get<ReesrvationInfoDto>(this.baseUrl + this.apiUrl + "/" + id);
   }

   getReservationsByEmail(email: string): Observable<ReesrvationInfoDto[]> {
    return this.http.post<ReesrvationInfoDto[]>(this.baseUrl + this.apiUrl + "/user", email);
   }
}
