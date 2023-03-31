import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user : User = {username:"", secureToken:0};

  login(username: string, password: string) {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    this.http.post<User>("http://127.0.0.1:9000/login", {username:username, password:password}, {headers:header}).subscribe(json=> {this.user = json;})
  
  }

  constructor(private http : HttpClient) { }
}