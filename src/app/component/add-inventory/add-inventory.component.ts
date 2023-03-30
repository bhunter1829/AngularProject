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

  name: string = "";
  selectDepartment: string = "";
  id : number = 0;
  addedItemMessage: string = "";
  errorMessage: string = "";
  departments : Department[] = [{department_id:1, department:'Food'},
{department_id:2,department:'Utility'},
{department_id:3,department:'Personal Care'},
{department_id:4,department:'Pet Care'}];

//  @Output()
//  addedItemEvent :EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {}
  constructor(private inventoryService :InventoryService ){
    //this.selectDepartment = "select"

  }
 
  addButton():void{
    let selectDepartment = this.selectDepartment;


    //find method goes in each emelent of the array and returns the first element that matches
    //which would be department
    let sameDepartment = this.departments.find(json => json.department===selectDepartment);

    //optinal chaining (?) to make sure nothing is undefined
    //checking if the sameDepartment exists before we access the id.
    let departmentid = sameDepartment?.department_id;

    //this is our inventory model we are accessing.
    let inventory: Inventory ={id:this.id, name:this.name,department_id:departmentid};
    //let department = {selectDepartment:this.selectDepartment};
    //if(this.name!==''){
    this.inventoryService.getAddInventory(inventory).subscribe(
      json =>this.addedItemMessage = "added your Item to the Inventory!"
    );
    this.inventoryService.getAddInventory(inventory)
  }
  //else{
    //this.errorMessage = "You need to enter an item for it to be added to the list";
 // }
//}
}


//if(sameDepartment!==undefined){
  //departmentid = sameDepartment.department_id;
//}
//else{
  //if not found set the value to false
  ///departmentid=-1;
//}