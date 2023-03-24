import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInventoryComponent } from './component/add-inventory/add-inventory.component';
import { GetAllComponent } from './component/get-all/get-all.component';
import { DeleteComponent}  from './component/delete/delete.component';

const routes: Routes = [
 {path:"get-all", component: GetAllComponent},

 {path:"delete", component: DeleteComponent}

 {path:"add-inventory", component:AddInventoryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
