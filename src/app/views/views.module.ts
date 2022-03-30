import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewsRoutingModule } from './views-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],

  imports: [
    ViewsRoutingModule,
    SharedModule,

  ],
  exports: [
    HomeComponent,
    LoginComponent
  ],
  providers: [],
  bootstrap: []
})
export class ViewsModule { }
