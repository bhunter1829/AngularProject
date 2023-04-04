import { Component, OnInit } from '@angular/core';
import {Inventory} from 'src/app/models/inventory';
import { InventoryService } from 'src/app/service/inventory.service';
import { GetAllComponent } from '../get-all/get-all.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

name:string = "";

id:number = 0;
DeletedItemMessage : string ="";
errorDeleteMessage : string = "";
constructor(private inventoryService: InventoryService ){

}

  ngOnInit():void{

  }

  buttonToDelete():void{
      //Check for empty string
if (this.name != '') {
      // Get all inventories from the service
    this.inventoryService.getAllInventory().subscribe(
      (inventories: Inventory[]) => {
      // Check if the inventory exists in the array
        const inventoryExists = inventories.some((inventory) => inventory.name === this.name);

        if (inventoryExists) {
          this.inventoryService.deleteInventoryByName(this.name).subscribe(
            json => {
              inventories = json;
              this.errorDeleteMessage = "Success you deleted " + this.name;
            }
          );
        } else {
          this.errorDeleteMessage = this.name +" is not in the list. Please check spelling before deleting.";
        }
      }
    );
  } else {
    this.errorDeleteMessage = "Please enter the name of the item you want to delete.";
  }
}
}
