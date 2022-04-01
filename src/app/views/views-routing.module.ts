import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BuyFoodComponent } from './buy-food/buy-food.component';
import { BuyTicketsComponent } from './buy-tickets/buy-tickets.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'food',
        component: BuyFoodComponent
      },
      {
        path: 'tickets',
        component: BuyTicketsComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      },
    ]
  },

]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ViewsRoutingModule { }
