import { NgModule } from '@angular/core';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

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
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    CommonModule,
  ],
  exports: [
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    MatButtonModule,
    MatSliderModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    MatCardModule,

  ]
})
export class SharedModule { }
