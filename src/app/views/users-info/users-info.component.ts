import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services.service';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.scss']
})
export class UsersInfoComponent implements OnInit {

  public users: any[] = [
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

  constructor(private servicio: GeneralService) {

  }

  ngOnInit(): void {
    this.getClientsList();
  }

  public verInfo(IDuser: number) {
    alert("El id del Usuario es :" + IDuser);
  }

  getClientsList() {
    this.servicio.getClients().subscribe(
      (success: any) => {
        this.users = success.data;
      }
    );
  }

}
