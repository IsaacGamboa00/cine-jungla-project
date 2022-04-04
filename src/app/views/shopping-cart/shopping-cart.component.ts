import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  public foodInfo: any;

  constructor(private services: GeneralService) {

    this.foodInfo = this.services.foodInfo;
  }

  ngOnInit(): void {
  }

}
