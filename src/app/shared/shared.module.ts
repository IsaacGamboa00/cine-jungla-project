import { NgModule } from '@angular/core';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [],
  imports: [
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    MatButtonModule,
    MatSliderModule,
    MatToolbarModule
  ],
  exports: [
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    MatButtonModule,
    MatSliderModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
