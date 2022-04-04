import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { LoginComponent } from '../views/login/login.component';
import { BuyFoodComponent } from '../views/buy-food/buy-food.component';
import { BuyTicketsComponent } from '../views/buy-tickets/buy-tickets.component';
import { UsersInfoComponent } from '../views/users-info/users-info.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'food',
        component: BuyFoodComponent
      },
      {
        path: 'tickets',
        component: BuyTicketsComponent
      },
      {
        path: 'UsersInfomation',
        component: UsersInfoComponent
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
export class NavRoutingModule { }
