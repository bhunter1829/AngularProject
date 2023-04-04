import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Department } from 'src/app/models/Department';
import { Inventory } from 'src/app/models/inventory';
import { InventoryService } from 'src/app/service/inventory.service';


@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {


  departmentFK : number = 0;
  name: string = "";
  selectDepartment: string = "";
  id : number = 0;
  amount : number = 0;

  addedItemMessage: string = "";

  departments : Department[] = [{department_id:1, department:'Food'},
{department_id:2,department:'Utility'},
{department_id:3,department:'Personal Care'},
{department_id:4,department:'Pet Care'}];

  ngOnInit(): void {}
  constructor(private inventoryService :InventoryService ){
  }
 
  addButton():void{

    //find method goes in each element of the array and returns the first element that matches
    //which would be department
    let sameDepartment = this.departments.find(json => json.department===this.selectDepartment);

    //optional chaining (?) to make sure nothing is undefined
    //checking if the sameDepartment exists before we access the id.
    let departmentFK = sameDepartment?.department_id;

    //this is our inventory model we are accessing.

    let inventory: Inventory ={id:this.id, name:this.name,amount:this.amount,departmentFK:departmentFK};

    this.inventoryService.getAddInventory(inventory).subscribe(
      json =>this.addedItemMessage = "added " + this.name + " item "+" into department "+ this.selectDepartment+ " to the Inventory!"
    );
  }
}
