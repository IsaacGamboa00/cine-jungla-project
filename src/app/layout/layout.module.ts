import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  providers: []
})
export class layoutModule { }
