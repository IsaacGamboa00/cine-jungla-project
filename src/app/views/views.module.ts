import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewsRoutingModule } from './views-routing.module';




@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],

  imports: [
    ViewsRoutingModule

  ],
  providers: [],
  bootstrap: []
})
export class ViewsModule { }
