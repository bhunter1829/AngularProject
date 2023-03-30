import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAllComponent } from './component/get-all/get-all.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DeleteComponent } from './component/delete/delete.component';

import { AddInventoryComponent } from './component/add-inventory/add-inventory.component';
import { StatisticsComponent } from './component/statistics/statistics.component';


@NgModule({
  declarations: [
    AppComponent,
    GetAllComponent,
    NavbarComponent,
    DeleteComponent,
    AddInventoryComponent,
    StatisticsComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
