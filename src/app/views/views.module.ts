import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewsRoutingModule } from './views-routing.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],

  imports: [
    ViewsRoutingModule,
    SharedModule

  ],
  providers: [],
  bootstrap: []
})
export class ViewsModule { }
