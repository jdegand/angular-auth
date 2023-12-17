import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserInterface } from '../interfaces/UserInterface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  http = inject(HttpClient);

  register(payload: UserInterface) {
    return this.http.post('https://api.realworld.io/api/users', {
      user: payload,
    })
  }

  login(payload: Partial<UserInterface>) {
    return this.http.post('https://api.realworld.io/api/users/login', {
      user: payload,
    })
  }

  getUser(){
    return this.http.get<{ user: UserInterface }>('https://api.realworld.io/api/user')
  }


}
