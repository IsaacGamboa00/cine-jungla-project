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




@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    BuyFoodComponent,
    BuyTicketsComponent,
    ShoppingCartComponent
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
