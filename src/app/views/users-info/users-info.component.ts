import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.scss']
})
export class UsersInfoComponent implements OnInit {

  public users: any[]=[
    {
      img: './../../../assets/imgInfoUser/avatar.png',
      id: '121251',
      name: 'Juan Camilo',
      lastaname: 'Céspedes Romero',
      correo: 'juankamilocromero@gmail.com'
    },
    {
      img: './../../../assets/imgInfoUser/avatar.png',
      id: '121251',
      name: 'Juan Camilo',
      lastaname: 'Céspedes Romero',
      correo: 'juankamilocromero@gmail.com'
    },
    {
      img: './../../../assets/imgInfoUser/avatar.png',
      id: '121251',
      name: 'Juan Camilo',
      lastaname: 'Céspedes Romero',
      correo: 'juankamilocromero@gmail.com'
    },
    {
      img: './../../../assets/imgInfoUser/avatar.png',
      id: '121251',
      name: 'Juan Camilo',
      lastaname: 'Céspedes Romero',
      correo: 'juankamilocromero@gmail.com'
    },
    {
      img: './../../../assets/imgInfoUser/avatar.png',
      id: '121251',
      name: 'Juan Camilo',
      lastaname: 'Céspedes Romero',
      correo: 'juankamilocromero@gmail.com'
    },
    {
      img: './../../../assets/imgInfoUser/avatar.png',
      id: '121251',
      name: 'Juan Camilo',
      lastaname: 'Céspedes Romero',
      correo: 'juankamilocromero@gmail.com'
    },
    {
      img: './../../../assets/imgInfoUser/avatar.png',
      id: '121251',
      name: 'Juan Camilo',
      lastaname: 'Céspedes Romero',
      correo: 'juankamilocromero@gmail.com'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public verInfo(IDuser: number){
    alert("El id del Usuario es :"+ IDuser);
  }

}
