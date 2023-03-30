import { Component, OnInit } from '@angular/core';
import {Inventory} from 'src/app/models/inventory';
import { InventoryService } from 'src/app/service/inventory.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit{

  count:number = 0;
  sum:number = 0;
inventories : Inventory[]= [];
constructor(private inventoryService: InventoryService ){

}

  ngOnInit():void{
    this.inventoryService.getUniqueCount().subscribe((count) => (this.count = count));

    this.inventoryService.getTotalItems().subscribe((sum) => (this.sum = sum));
  }

  buttonCount(){

      this.inventoryService.getUniqueCount().subscribe((count) => (this.count = count));
  }

    buttonSum(){

      this.inventoryService.getTotalItems().subscribe((sum) => (this.sum = sum));
  }

}
