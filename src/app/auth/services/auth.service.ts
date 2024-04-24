import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface token {
  access_token:  string;
  refresh_token: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
private http = inject(HttpClient)
  constructor() { }
  login(data: {email: string, password: string}): Observable<token>{
    return this.http.post<token>(`${environment.baseUrl}/auth/login`, data)
  }
}
