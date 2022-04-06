import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GeneralService } from '../services.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {

  public info: any[] = [];


  constructor(
    public dialogRef: MatDialogRef<DetailUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: GeneralService
  ) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    this.service.getClientByID(this.data.IDuser).subscribe(
      (success: any) => {
        this.info = success.data;
      }
    );

  }

}
