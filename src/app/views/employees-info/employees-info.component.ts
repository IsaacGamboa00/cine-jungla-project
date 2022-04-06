import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services.service';

@Component({
  selector: 'app-employees-info',
  templateUrl: './employees-info.component.html',
  styleUrls: ['./employees-info.component.scss']
})
export class EmployeesInfoComponent implements OnInit {

  public employees: any[] = [

  ];

  constructor(
    private servicio: GeneralService,
  ) { }

  public verInfo(IDuser: number) {
    alert("El id del Usuario es :" + IDuser);
  }

  ngOnInit(): void {

    this.getClientsList();
  }

  getClientsList() {
    this.servicio.getPersonal().subscribe(
      (success: any) => {
        this.employees = success.data;
      }
    );
  }
}
