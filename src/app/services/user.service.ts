import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  datiUtente = new ReplaySubject();

  ruoloUtente = new ReplaySubject();

  apiBaseUrl = 'api/users';

  constructor(private http: HttpClient) { }

  insertUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/signup`, user)
  }

  getUser(email: string): Observable<any> {
    const dati = { email: email};
    return this.http.post<any>(`${this.apiBaseUrl}/user`, dati);
  }

}
