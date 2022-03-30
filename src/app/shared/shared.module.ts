import { NgModule } from '@angular/core';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [],
  imports: [
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    MatButtonModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    CommonModule
  ],
  exports: [
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    MatButtonModule,
    MatSliderModule,
    MatToolbarModule,
    CommonModule,
    MatCardModule,

  ]
})
export class SharedModule { }
