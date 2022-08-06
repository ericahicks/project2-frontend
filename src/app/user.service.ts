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
  
  private baseURL = environment.apiURL;
  private usersURL = "/users/";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL + this.usersURL);
  }

  getUserIdByEmail(email: string): Observable<number> { // using post to get bc email in url is weird
    return this.http.post<number>(this.baseURL + this.usersURL + "email", email);
  }

  postUser(user: User): Observable<User>{
    return this.http.post<User>(this.baseURL + this.usersURL, user)

  }
}



// /** POST: add a new hero to the database */
// addHero(hero: Hero): Observable<Hero> {
//   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
//     .pipe(
//       catchError(this.handleError('addHero', hero))
//     );
// }
