import { NgModule } from '@angular/core';
import { mainComponent } from './main.component';
import { layoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { ViewsModule } from './views/views.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    mainComponent,
  ],

  imports: [
    layoutModule,
    AppRoutingModule,
    ViewsModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],

  exports: [


  ],
  providers: [],
  bootstrap: [mainComponent]
})
export class mainModule { }
