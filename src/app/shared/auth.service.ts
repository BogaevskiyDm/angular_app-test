import { delay, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl!: string;

  constructor() { }
  login(login: string, passw: string): Observable<boolean> {
    const observable = of({ login: 'admin', passw: '123' }).pipe(delay(1000));
    observable.pipe();
    return observable.pipe(map((res) => login === res.login && passw === res.passw ? this.isLoggedIn = true : false));
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
