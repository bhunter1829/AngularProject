import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from '../models/inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  
getAllInventory():Observable<any[]>{

  let header: HttpHeaders = new HttpHeaders();
  header.append("accept", "text/json");
  header.append("Access-Control-Allow-Origin", "*");
  return this.http.get<any[]>("http://127.0.0.1:9000/inventory",{headers:header});
}

getAddInventory(inventory: Inventory):Observable<Inventory>{
  let header: HttpHeaders = new HttpHeaders();
  header.append("accept", "text/json");
  header.append("Access-Control-Allow-Origin", "*");
  return this.http.post<Inventory>("http://127.0.0.1:9000/inventory", inventory,{headers:header}); 
}

  constructor(private http: HttpClient) { }
}
