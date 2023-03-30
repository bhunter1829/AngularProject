import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInventoryComponent } from './component/add-inventory/add-inventory.component';
import { GetAllComponent } from './component/get-all/get-all.component';
import { DeleteComponent}  from './component/delete/delete.component';
import { StatisticsComponent } from './component/statistics/statistics.component';

const routes: Routes = [
 {path:"get-all", component: GetAllComponent},

 {path:"delete", component: DeleteComponent},

 {path:"add-inventory", component:AddInventoryComponent },

 {path:"", component:StatisticsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
