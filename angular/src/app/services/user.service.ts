import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<Object> {
    const url = 'https://reqres.in/api/users?page=1&per_page=12';
    return this.httpClient.get(url);
  }
}
