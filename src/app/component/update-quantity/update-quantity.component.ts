import { Component, OnInit } from '@angular/core';
import { Inventory } from 'src/app/models/inventory';
import { InventoryService } from 'src/app/service/inventory.service';

@Component({
  selector: 'app-update-quantity',
  templateUrl: './update-quantity.component.html',
  styleUrls: ['./update-quantity.component.css']
})
export class UpdateQuantityComponent implements OnInit {

  name:string = "";
inventories : Inventory[]= [];
id:number = 0;
amount:number = 0;
DeletedItemMessage : string ="";
errorDeleteMessage : string = "";
constructor(private inventoryService: InventoryService ){

}

  ngOnInit():void{

  }

  buttonToUpdate():void{
    this.inventoryService.getAllInventory().subscribe(
      (inventories: Inventory[]) => {
        const inventoryExists = inventories.some((inventory) => inventory.name === this.name);
        if (inventoryExists) {
          this.inventoryService.patchItemAmount(this.name, this.amount).subscribe(
            json => {this.inventories = json;});
        } 
      }
    );
  } 
}




