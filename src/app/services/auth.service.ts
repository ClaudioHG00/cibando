import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserService } from './user.service';
import { USERS } from '../mock/user.mock';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiBaseUrl = 'api/users';

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  // login(email: string, password: string): Observable<any> {
  //   const user = {email: email, password: password};
  //   return this.http.post<any>(`${this.apiBaseUrl}/login`, user)
  // }

  // Login mockato
  login(email: string, password: string): Observable<any> {
    const user = USERS.find(user => user.email === email && user.password === password);
    return of (user);
  }

  saveStorage(dati: any) {
    const user = {
      name: dati.name,
      email: dati.email,
      password: dati.password,
      role: dati.role,
    }

    localStorage.setItem('user', JSON.stringify(user))
  }

  isLogged(): boolean {
    return JSON.parse(localStorage.getItem('user')) !== null;
  }

  logout(): void {
    localStorage.removeItem('user');
  }

}
