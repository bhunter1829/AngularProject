import { Component, OnInit } from '@angular/core';
import {Inventory} from 'src/app/models/inventory';
import { InventoryService } from 'src/app/service/inventory.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

name:string = "";
inventories : Inventory[]= [];
constructor(private inventoryService: InventoryService ){

}

  ngOnInit():void{

  }

  buttonToDelete():void{

      this.inventoryService.deleteInventoryById().subscribe(json =>this.inventories = json);
  }

}
