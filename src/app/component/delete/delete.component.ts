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
inventories : Inventory[]= [];
id:number = 0;
DeletedItemMessage : string ="";
errorDeleteMessage : string = "";
constructor(private inventoryService: InventoryService ){

}

  ngOnInit():void{

  }

  buttonToDelete():void{

if (this.name != '') {
    // Get all inventories from the service
    this.inventoryService.getAllInventory().subscribe(
      (inventories: Inventory[]) => {
        // Check if the inventory exists in the array
        const inventoryExists = inventories.some((inventory) => inventory.name === this.name);

        if (inventoryExists) {
          this.inventoryService.deleteInventoryByName(this.name).subscribe(
            json => {
              this.inventories = json;
              this.errorDeleteMessage = "Success you deleted an item";
            }
          );
        } else {
          this.errorDeleteMessage = "The item is not in the list. Please check spelling before deleting.";
        }
      }
    );
  } else {
    this.errorDeleteMessage = "Please enter the name of the item you want to delete.";
  }
}
// .subscribe((error:HttpErrorResponse)=>
// {if(error.status==404)
//   {this.errorDeleteMessage ="item not found";}});
}
