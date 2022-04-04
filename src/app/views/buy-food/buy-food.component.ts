import { Component, OnInit } from '@angular/core';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-buy-food',
  templateUrl: './buy-food.component.html',
  styleUrls: ['./buy-food.component.scss']
})
export class BuyFoodComponent implements OnInit {

  public food: any[] = [
    {
      img: './../../../assets/imgsAlim/hamburguesa.png',
      name: 'Hamburguesa',
      price: '$18.000'
    },
    {
      img: './../../../assets/imgsAlim/pizza.png',
      name: 'Pizza',
      price: '$16.500'
    },
    {
      img: './../../../assets/imgsAlim/taco.png',
      name: 'Taco',
      price: '$12.300'
    },
  ];

  public drinks: any[]=[
    {
      img: './../../../assets/imgsBebid/coca.png',
      name: 'CocaCola',
      price: '$4.800'
    },
    {
      img: './../../../assets/imgsBebid/cocaDiet.png',
      name: 'CocaCola Dietetica',
      price: '$5.800'
    },
    {
      img: './../../../assets/imgsBebid/monster.png',
      name: 'Monster Energy',
      price: '$5.800'
    },
    {
      img: './../../../assets/imgsBebid/pepsi.png',
      name: 'Pepsi',
      price: '$4.800'
    },
    {
      img: './../../../assets/imgsBebid/redBull.png',
      name: 'RedBull',
      price: '$5.800'
    },
    {
      img: './../../../assets/imgsBebid/soda.png',
      name: 'Schweppes',
      price: '$4.800'
    },

  ];
  public sweetmeats: any[]=[
    {
      img: './../../../assets/imgsConfi/aros.png',
      name: 'Aros Dulces',
      price: '$5.000'
      
    },
    {
      img: './../../../assets/imgsConfi/clasicas.png',
      name: 'Clasicas',
      price: '$4.500'
    },
    {
      img: './../../../assets/imgsConfi/gusanos.png',
      name: 'Gusanitos Dulces',
      price: '$4.800'
    },
    {
      img: './../../../assets/imgsConfi/pinguinos.png',
      name: 'Pingüinitos',
      price: '$5.500'
      
    },
    {
      img: './../../../assets/imgsConfi/tridentFresa.png',
      name: 'Trident Fresa',
      price: '$3.800'

    },
    {
      img: './../../../assets/imgsConfi/tridentMenta.png',
      name: 'Trident Menta',
      price: '$3.800'
    },
  ];

  public cantTotal: number=0;


  constructor() { }

  ngOnInit(): void {
  }

  public facturar(){
    alert("SE VA A FACTURAR");
  }
  public addComida(e: any){
    if(e<=0){
      alert("Ingrese una cantidad valida")
    }else{
      e = Number(e);
      this.cantTotal = this.cantTotal + e;
      alert("Se agrego al carrito tu total de productos es igual a: " + this.cantTotal);
    }
  }
}
