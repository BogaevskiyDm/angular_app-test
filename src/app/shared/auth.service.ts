import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  redirectUrl!: string;


  constructor() { }

  login(login: string, passw: string): Promise<boolean> {

    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          login: 'admin',
          passw: '123'
        }) 
      }, 1000);
    })

    return promise.then((res: any) => { return login === res.login && passw === res.passw ? this.isLoggedIn = true : false; })

  };

  logout(): void {
    this.isLoggedIn = false;
  }
}
