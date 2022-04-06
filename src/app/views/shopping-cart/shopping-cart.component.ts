import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services.service';
import { BuyService } from './buy.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModelAcount } from '../../models/acount';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  providers: [ModelAcount]
})
export class ShoppingCartComponent implements OnInit {

  public foodInfo: any = null;
  public ticketsInfo: any = null;
  form: FormGroup = this.formBuilder.group(this.modelAcount.modelClient);
  data: any = null;
  constructor(
    private services: GeneralService,
    private buyServices: BuyService,
    private formBuilder: FormBuilder,
    private modelAcount: ModelAcount,
  ) {
    this.foodInfo = this.services.foodInfo;
    this.ticketsInfo = this.services.ticketsInfo;
  }

  ngOnInit(): void {
  }

  buy() {
    const id = Number(this.form.value.numero_id_empleado);
    const type = this.form.value.tipo_id_empleado;

    if (this.foodInfo == null && this.ticketsInfo == null) {
      alert('Upss no hay nada que comprar');
    }
    else if (this.foodInfo == null && this.ticketsInfo != null) {
      const cantTotalTickets = (this.ticketsInfo.cantTotalGeneral + this.ticketsInfo.cantTotalPreferencial);
      const totalTickets = this.ticketsInfo.priceTotalPreferencial + this.ticketsInfo.priceTotalGeneral;
      const total = totalTickets;
      this.data = {
        id_compra: Math.floor(Math.random() * (800 - 100 + 1)) + 100,
        fecha_compra: "2022-04-06",
        cantidad_boletas_general: this.ticketsInfo.cantTotalGeneral,
        cantidad_boletas_preferencial: this.ticketsInfo.cantTotalPreferencial,
        puntaje_boletas: (cantTotalTickets * 10),
        monto_boletas: totalTickets,
        puntaje_comida: 0,
        monto_comida: 0,
        puntaje_total: (cantTotalTickets * 10),
        monto_total: total,
        tipo_id_cliente: type,
        numero_id_cliente: id
      }
      this.insertBuy();

    }
    else if (this.foodInfo != null && this.ticketsInfo == null) {
      const cantTotalTickets = 0;
      const totalTickets = 0;
      const total = this.foodInfo.priceTotal;
      this.data = {
        id_compra: Math.floor(Math.random() * (800 - 100 + 1)) + 100,
        fecha_compra: "2022-04-06",
        cantidad_boletas_general: 0,
        cantidad_boletas_preferencial: 0,
        puntaje_boletas: 0,
        monto_boletas: 0,
        puntaje_comida: (this.foodInfo.cantTotal * 5),
        monto_comida: this.foodInfo.priceTotal,
        puntaje_total: (this.foodInfo.cantTotal * 5),
        monto_total: total,
        tipo_id_cliente: type,
        numero_id_cliente: id
      }
      this.insertBuy();

    }
    else {
      const cantTotalTickets = (this.ticketsInfo.cantTotalGeneral + this.ticketsInfo.cantTotalPreferencial);
      const totalTickets = this.ticketsInfo.priceTotalPreferencial + this.ticketsInfo.priceTotalGeneral;
      const total = totalTickets + this.foodInfo.priceTotal;
      this.data = {
        id_compra: Math.floor(Math.random() * (800 - 100 + 1)) + 100,
        fecha_compra: "2022-04-06",
        cantidad_boletas_general: this.ticketsInfo.cantTotalGeneral,
        cantidad_boletas_preferencial: this.ticketsInfo.cantTotalPreferencial,
        puntaje_boletas: (cantTotalTickets * 10),
        monto_boletas: totalTickets,
        puntaje_comida: (this.foodInfo.cantTotal * 5),
        monto_comida: this.foodInfo.priceTotal,
        puntaje_total: (cantTotalTickets * 10) + (this.foodInfo.cantTotal * 5),
        monto_total: total,
        tipo_id_cliente: type,
        numero_id_cliente: id
      }
      this.insertBuy();
    }

  }
  insertBuy() {
    this.buyServices.addBuy(this.data).subscribe(
      (success) => {
        console.log(success, 'funciono la monda')
        this.foodInfo = null;
        this.ticketsInfo = null;
        alert('Comprea realizada');
      },
      (error) => {


      }
    );
  }
}
