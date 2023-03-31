import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInventoryComponent } from './component/add-inventory/add-inventory.component';
import { GetAllComponent } from './component/get-all/get-all.component';
import { DeleteComponent}  from './component/delete/delete.component';
import { StatisticsComponent } from './component/statistics/statistics.component';
import { LoginFormComponent } from './component/login-form/login-form.component';

const routes: Routes = [
 {path:"get-all", component: GetAllComponent},

 {path:"delete", component: DeleteComponent},

 {path:"add-inventory", component:AddInventoryComponent },

 {path:"", component:StatisticsComponent },
 {path:"login-form", component:LoginFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
