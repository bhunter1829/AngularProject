import { Component, OnInit } from '@angular/core';
import { Inventory } from 'src/app/models/inventory';
import { InventoryService } from 'src/app/service/inventory.service';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})

export class SearchByNameComponent implements OnInit {

  constructor(private inventoryService: InventoryService ){

}

  departmentFK:number = 0;
name:string = "";
inventories : Inventory[]= [];

    ngOnInit(): void {
      
    }

    searchInventoryByName(): void {
  this.inventoryService.getInventoryByName(this.name).subscribe(
    json => {this.inventories = json;},);
    }
}

