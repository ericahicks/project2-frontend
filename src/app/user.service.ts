import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from './models/user';
import { USERS } from './models/mock-users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http:HttpClient;
  private baseURL = environment.apiURL;
  private usersURL = "/users/";


  constructor(http: HttpClient) { 
    this.http = http
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL + this.usersURL);
  }

  postUser(user: User): Observable<any>{
    return this.http.post(this.baseURL + this.usersURL, user)

  }
}



// /** POST: add a new hero to the database */
// addHero(hero: Hero): Observable<Hero> {
//   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
//     .pipe(
//       catchError(this.handleError('addHero', hero))
//     );
// }
