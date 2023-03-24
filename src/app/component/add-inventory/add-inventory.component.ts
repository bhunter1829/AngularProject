import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Inventory } from 'src/app/models/inventory';
import { InventoryService } from 'src/app/service/inventory.service';


@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {

  name: string = "";
  id : number = 0;
  addedItemMessage: string = "";
  errorMessage: string = "";

//  @Output()
//  addedItemEvent :EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {}
  constructor(private inventoryService :InventoryService ){

  }
 
  addButton():void{
    let inventory: Inventory ={id:this.id, name:this.name};
    if(this.name!==''){
    this.inventoryService.getAddInventory(inventory).subscribe(
      json =>this.addedItemMessage = "added your Item to the Inventory!"
    );
  }
  else{
    this.errorMessage = "You need to enter an item for it to be added to the list";
  }
}
}
