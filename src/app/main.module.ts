import { NgModule } from '@angular/core';
import { mainComponent } from './main.component';
import { layoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { ViewsModule } from './views/views.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    mainComponent,
  ],

  imports: [
    CommonModule,
    layoutModule,
    AppRoutingModule,
    ViewsModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],

  exports: [

  ],
  providers: [],
  bootstrap: [mainComponent]
})
export class mainModule { }
