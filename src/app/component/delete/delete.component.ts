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
id:number = 0;
DeletedItemMessage : string ="";
errorDeleteMessage : string = "";
constructor(private inventoryService: InventoryService ){

}

  ngOnInit():void{

  }

  buttonToDelete():void{
    if(this.name!=''){
      this.inventoryService.deleteInventoryByName(this.name).subscribe(
        json =>{this.inventories = json;
        this.errorDeleteMessage = "Success you deleted an item";
      }
      );
    }
    else{
      this.errorDeleteMessage = "Please check spelling AND/OR if the item is in the list before deleting.";
    }
  }
}

// .subscribe((error:HttpErrorResponse)=>
// {if(error.status==404)
//   {this.errorDeleteMessage ="item not found";}});