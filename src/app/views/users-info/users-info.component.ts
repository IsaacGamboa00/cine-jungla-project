import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GeneralService } from '../services.service';
import { DetailUserComponent } from '../detail-user/detail-user.component';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.scss']
})
export class UsersInfoComponent implements OnInit {

  public users: any[] = [

  ];

  constructor(
    private servicio: GeneralService,
    public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.getClientsList();
  }

  public verInfo(IDuser: number) {
    const dialogRef = this.dialog.open(DetailUserComponent, {
      width: '1000px',
      data: { IDuser: IDuser },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getClientsList() {
    this.servicio.getClients().subscribe(
      (success: any) => {
        this.users = success.data;
      }
    );
  }

}
