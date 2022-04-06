import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewsRoutingModule } from './views-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { BuyFoodComponent } from './buy-food/buy-food.component';
import { BuyTicketsComponent } from './buy-tickets/buy-tickets.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UsersInfoComponent } from './users-info/users-info.component';

import { ServicesComponent } from './services/services.component';

import { EmployeesInfoComponent } from './employees-info/employees-info.component';
import { DetailUserComponent } from './detail-user/detail-user.component';






@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    BuyFoodComponent,
    BuyTicketsComponent,
    ShoppingCartComponent,
    UsersInfoComponent,
    ServicesComponent,
    EmployeesInfoComponent,
    DetailUserComponent

  ],

  imports: [
    ViewsRoutingModule,
    SharedModule,
    ReactiveFormsModule

  ],
  exports: [
    HomeComponent,
    LoginComponent
  ],
  providers: [],
  bootstrap: []
})
export class ViewsModule { }
