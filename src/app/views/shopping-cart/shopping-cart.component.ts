import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  public foodInfo: any = null;
  public ticketsInfo: any = null;

  constructor(private services: GeneralService) {

    this.foodInfo = this.services.foodInfo;
    this.ticketsInfo = this.services.ticketsInfo;
  }

  ngOnInit(): void {
  }

  buy() { }

}
