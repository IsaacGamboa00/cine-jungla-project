import { NgModule } from '@angular/core';
import { mainComponent } from './main.component';
import { layoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { ViewsModule } from './views/views.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    mainComponent,

  ],

  imports: [
    BrowserModule,
    CommonModule,
    layoutModule,
    AppRoutingModule,
    ViewsModule
  ],
  providers: [],
  bootstrap: [mainComponent]
})
export class mainModule { }
