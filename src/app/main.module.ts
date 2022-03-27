import { NgModule } from '@angular/core';
import { mainComponent } from './main.component';
import { layoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { ViewsModule } from './views/views.module';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    mainComponent,
  ],

  imports: [
    layoutModule,
    AppRoutingModule,
    ViewsModule,
    SharedModule

  ],

  exports: [

  ],
  providers: [],
  bootstrap: [mainComponent]
})
export class mainModule { }
