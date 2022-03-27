import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';





@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  providers: []
})
export class layoutModule { }
