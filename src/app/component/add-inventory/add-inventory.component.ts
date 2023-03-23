import { Component, OnInit } from '@angular/core';
import { Inventory } from 'src/app/models/inventory';
import { InventoryService } from 'src/app/service/inventory.service';


@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {

  name: string = "";
  inventories : Inventory[]= [];
  
  ngOnInit(): void {}
  constructor(private inventoryService :InventoryService ){

  }
 
  addButton(){
    const inventory = {name: this.name};
    this.inventoryService.getAllInventory().subscribe();
    console.log("Testing if it worked")
  }
}
