import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-info',
  templateUrl: './employees-info.component.html',
  styleUrls: ['./employees-info.component.scss']
})
export class EmployeesInfoComponent implements OnInit {

  public employees: any[]=[
    {
      img: './../../../assets/imgInfoUser/avatar.png',
      id: '123456',
      name: 'Laura',
      lastname: 'Ramirez',
      email: 'lara@correo.edu.co'
    },
    {
      img: './../../../assets/imgInfoUser/avatar.png',
      id: '123456',
      name: 'Laura',
      lastname: 'Ramirez',
      email: 'lara@correo.edu.co'
    },
    {
      img: './../../../assets/imgInfoUser/avatar.png',
      id: '123456',
      name: 'Laura',
      lastname: 'Ramirez',
      email: 'lara@correo.edu.co'
    },
    {
      img: './../../../assets/imgInfoUser/avatar.png',
      id: '123456',
      name: 'Laura',
      lastname: 'Ramirez',
      email: 'lara@correo.edu.co'
    }
  ];

  constructor() { }
  public verInfo(IDuser: number){
    alert("El id del Usuario es :"+ IDuser);
  }

  ngOnInit(): void {
  }

}
