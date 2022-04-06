import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public services: any[] = [
    {
      img: './../../../assets/imgsHome/alimentos.jpg',
      name: 'Alimentos'
    },
    {
      img: './../../../assets/imgsHome/pelicula.jpg',
      name: 'Peliculas'
    },
    {
      img: './../../../assets/imgInfoUser/Informacion de Personal.jpg',
      name: 'Informacion de Clientes'
    },
    {
      img: './../../../assets/imgInfoUser/Informacion de Clientes.jpg',
      name: 'Informacion de Personal'
    },
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(title: string) {
    if (localStorage.getItem("id") != null && localStorage.getItem("pass") != null) {
      if (title == 'Alimentos') {
        this.router.navigateByUrl('/food');
      }
      if (title == 'Peliculas') {
        this.router.navigateByUrl('/tickets');
      }
      if (title == 'Informacion de Clientes') {
        this.router.navigateByUrl('/UsersInfomation');
      }
      if (title == 'Informacion de Personal') {
        this.router.navigateByUrl('/employessInfo');
      }
    } else {
      this.router.navigateByUrl('/login');
    }
  }

}
