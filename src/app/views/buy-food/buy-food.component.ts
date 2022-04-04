import { Component, OnInit } from '@angular/core';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { GeneralService } from '../services.service';
import { Router } from '@angular/router';

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
      price: '$18.000',
      priceNumber: 18000
    },
    {
      img: './../../../assets/imgsAlim/pizza.png',
      name: 'Pizza',
      price: '$16.500',
      priceNumber: 16500

    },
    {
      img: './../../../assets/imgsAlim/taco.png',
      name: 'Taco',
      price: '$12.300',
      priceNumber: 12300

    },
  ];

  public drinks: any[] = [
    {
      img: './../../../assets/imgsBebid/coca.png',
      name: 'CocaCola',
      price: '$4.800',
      priceNumber: 4800
    },
    {
      img: './../../../assets/imgsBebid/cocaDiet.png',
      name: 'CocaCola Dietetica',
      price: '$5.800',
      priceNumber: 5800

    },
    {
      img: './../../../assets/imgsBebid/monster.png',
      name: 'Monster Energy',
      price: '$5.800',
      priceNumber: 5800

    },
    {
      img: './../../../assets/imgsBebid/pepsi.png',
      name: 'Pepsi',
      price: '$4.800',
      priceNumber: 4800

    },
    {
      img: './../../../assets/imgsBebid/redBull.png',
      name: 'RedBull',
      price: '$5.800',
      priceNumber: 5800

    },
    {
      img: './../../../assets/imgsBebid/soda.png',
      name: 'Schweppes',
      price: '$4.800',
      priceNumber: 4800

    },

  ];
  public sweetmeats: any[] = [
    {
      img: './../../../assets/imgsConfi/aros.png',
      name: 'Aros Dulces',
      price: '$5.000',
      priceNumber: 5000


    },
    {
      img: './../../../assets/imgsConfi/clasicas.png',
      name: 'Clasicas',
      price: '$4.500',
      priceNumber: 4500

    },
    {
      img: './../../../assets/imgsConfi/gusanos.png',
      name: 'Gusanitos Dulces',
      price: '$4.800',
      priceNumber: 4800

    },
    {
      img: './../../../assets/imgsConfi/pinguinos.png',
      name: 'Pingüinitos',
      price: '$5.500',
      priceNumber: 5500


    },
    {
      img: './../../../assets/imgsConfi/tridentFresa.png',
      name: 'Trident Fresa',
      price: '$3.800',
      priceNumber: 3800


    },
    {
      img: './../../../assets/imgsConfi/tridentMenta.png',
      name: 'Trident Menta',
      price: '$3.800',
      priceNumber: 3800

    },
  ];

  public cantTotal: number = 0;
  public priceTotal: number = 0;


  constructor(
    private generalServices: GeneralService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  public addComida(e: any, price: number) {
    if (e <= 0) {
      alert("Ingrese una cantidad valida")
    } else {
      e = Number(e);
      this.cantTotal = this.cantTotal + e;
      this.priceTotal = this.priceTotal + (price * e);
      alert("Se agrego al carrito, tu total de productos es igual a: " + this.cantTotal + " por un precio total de: " + this.priceTotal);
      const cant = this.cantTotal;
      const prices = this.priceTotal;
      this.generalServices.foodInfo = {
        cantTotal: cant,
        priceTotal: prices
      }
    }
  }


  public facturar() {
    this.router.navigateByUrl('/shoppingCart');
  }
}
