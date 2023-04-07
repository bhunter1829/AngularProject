import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, throwError } from 'rxjs';
import { Inventory } from '../models/inventory';
import { Department } from '../models/Department';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {


getAllInventory():Observable<any[]>{

  let header: HttpHeaders = new HttpHeaders();
  header.append("accept", "text/json");
  header.append("Access-Control-Allow-Origin", "*");
  // return this.http.get<any[]>("http://127.0.0.1:9000/inventory",{headers:header});
  return this.http.get<any[]>("http://54.204.180.31:9000/inventory",{headers:header});
}


deleteInventoryByName(name : string ):Observable<any[]>{
  let header: HttpHeaders = new HttpHeaders();
  header.append("accept", "text/json");
  header.append("Access-Control-Allow-Origin", "*");
  // return this.http.delete<any[]>(`http://127.0.0.1:9000/inventory/remove/${name}` ,{headers:header})
  return this.http.delete<any[]>(`http://54.204.180.31:9000/inventory/remove/${name}` ,{headers:header})
}

getInventoryByName(name : string ):Observable<any[]>{
  let header: HttpHeaders = new HttpHeaders();
  header.append("accept", "text/json");
  header.append("Access-Control-Allow-Origin", "*");
  // return this.http.get<any[]>(`http://127.0.0.1:9000/inventory/${name}` ,{headers:header})
  return this.http.get<any[]>(`http://54.204.180.31:9000/inventory/${name}` ,{headers:header})
}


getAddInventory(inventory: Inventory):Observable<Inventory>{


  let header: HttpHeaders = new HttpHeaders();
  header.append("accept", "text/json");
  header.append("Access-Control-Allow-Origin", "*");
  // return this.http.post<Inventory>("http://127.0.0.1:9000/inventory", inventory,{headers:header});
  return this.http.post<Inventory>("http://54.204.180.31:9000/inventory", inventory,{headers:header}); 
}

getUniqueCount():Observable<number>{

  let header: HttpHeaders = new HttpHeaders();
  header.append("accept", "text/json");
  header.append("Access-Control-Allow-Origin", "*");
  // return this.http.get<number>("http://127.0.0.1:9000/count",{headers:header});
  return this.http.get<number>("http://54.204.180.31:9000/count",{headers:header});
}

getTotalItems():Observable<number>{

  let header: HttpHeaders = new HttpHeaders();
  header.append("accept", "text/json");
  header.append("Access-Control-Allow-Origin", "*");
  // return this.http.get<number>("http://127.0.0.1:9000/sum",{headers:header});
  return this.http.get<number>("http://54.204.180.31:9000/sum",{headers:header});
}

patchItemAmount(name : string, amount : number):Observable<any[]>{
  let header: HttpHeaders = new HttpHeaders();
  header.append("accept", "text/json");
  header.append("Access-Control-Allow-Origin", "*");
  // return this.http.patch<any[]>(`http://127.0.0.1:9000/inventory/${name}/${amount}` ,{headers:header})
  return this.http.patch<any[]>(`http://54.204.180.31:9000/inventory/${name}/${amount}` ,{headers:header})
}

// http://ec2-54-204-180-31.compute-1.amazonaws.com



  constructor(private http: HttpClient) { }
}




