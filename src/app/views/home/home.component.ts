import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public services: any[] = [
    {
      img: './../../../assets/imgsHome/alimentos.jpg',
      name: 'Alimentos'
    },
    {
      img: './../../../assets/imgsHome/pelicula.jpg',
      name: 'Peliculas'
    },
  ];

  public users: any[] = [
    {
      img: './../../../assets/team/Camilo.png',
      name: 'Juan Camilo Céspedes',
      role: 'Product Owner'
    },
    {
      img: './../../../assets/team/Jackson.png',
      name: 'Jackson Hendrich Luna',
      role: 'Scrum Master '
    },
    {
      img: './../../../assets/team/Laura.png',
      name: 'Laura Tatiana Ramírez ',
      role: 'Database Administrator'
    },
    {
      img: './../../../assets/team/Isaac.png',
      name: 'Isaac Gamboa Restrepo',
      role: 'FrontEnd Developer'
    },


    {
      img: './../../../assets/team/Santi.png',
      name: 'Nelson Santiago Roa',
      role: 'BackEnd Developer'
    },
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.services)
  }



}
