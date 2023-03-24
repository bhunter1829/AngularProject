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

deleteInventoryById(id : number ):Observable<any[]>{
  let header: HttpHeaders = new HttpHeaders();
  header.append("accept", "text/json");
  header.append("Access-Control-Allow-Origin", "*");
  return this.http.delete<any[]>("http://127.0.0.1:9000/inventory/" + id ,{headers:header});
}



  constructor(private http: HttpClient) { }
}
