import { Component, OnInit } from '@angular/core';
import {Inventory} from 'src/app/models/inventory';
import { Department } from 'src/app/models/Department';
import { InventoryService } from 'src/app/service/inventory.service';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent implements OnInit {

departmentFK:number = 0;
name:string = "";
inventories : Inventory[]= [];
showInventoryList: boolean = false;

constructor(private inventoryService: InventoryService ){

}

  ngOnInit():void{

  }

  toggleInventoryList(): void {
    //Boolean setup, if true show getall, set to interact with button event
    this.showInventoryList = !this.showInventoryList;
    this.inventoryService.getAllInventory().subscribe(json =>this.inventories = json);
    
  }

}


