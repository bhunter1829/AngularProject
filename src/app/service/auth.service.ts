import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user : User = {username:"", secureToken:0};

  login(username: string, password: string):Observable<User>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<User>("http://127.0.0.1:9000/login", {username:username, password:password}, {headers:header})
    // return this.http.post<User>("http://54.204.180.31:9000/login", {username:username, password:password}, {headers:header});
  
  }

  register(username:string,password:string):Observable<User>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<User>("http://127.0.0.1:9000/register", {username:username, password:password},{headers:header})
    // return this.http.post<User>("http://54.204.180.31:9000/register", {username:username, password:password}, {headers:header});
  }

  constructor(private http : HttpClient) { }
}