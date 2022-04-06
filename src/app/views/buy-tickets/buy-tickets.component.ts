import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.services';
import { GeneralService } from '../services.service';

@Component({
  selector: 'app-buy-tickets',
  templateUrl: './buy-tickets.component.html',
  styleUrls: ['./buy-tickets.component.scss']
})
export class BuyTicketsComponent implements OnInit {

  public cantTotalGeneral: any = 0;
  public priceTotalGeneral: any = 0;
  public cantTotalPreferencial: any = 0;
  public priceTotalPreferencial: any = 0;
  public movies: any = [];
  public multiplexes: any = [];

  constructor(
    private moviesService: MoviesService,
    private generalServices: GeneralService,
  ) { }

  ngOnInit(): void {
    this.getMultiplexList();
  }

  getMoviesList($event: any) {
    const idMultiplex = $event.target.value;
    if (idMultiplex == '--') {
      console.log('no selecciono nada')
    } else {
      this.moviesService.getAllMovies(idMultiplex).subscribe(
        (success: any) => {
          this.movies = success.data;
        }
        , (error) => { }
      );
    }

  }

  getMultiplexList() {
    this.moviesService.getAllMultiplex().subscribe(
      (success: any) => {
        this.multiplexes = success.data;
      }
      , (error) => { }
    );
  }

  addTickets(cantGeneral: any, cantPreferencial: any, priceGeneral: number, pricePreferencial: number, sala: any, nombre: any) {
    if (cantGeneral <= 0 && cantPreferencial <= 0) {
      alert('ingrese almenos un valor');
    } else {

      cantGeneral = Number(cantGeneral);
      cantPreferencial = Number(cantPreferencial);

      this.cantTotalGeneral = this.cantTotalGeneral + cantGeneral;
      this.priceTotalGeneral = this.priceTotalGeneral + (priceGeneral * cantGeneral);


      this.cantTotalPreferencial = this.cantTotalPreferencial + cantPreferencial;
      this.priceTotalPreferencial = this.priceTotalPreferencial + (pricePreferencial * cantPreferencial);

      alert("Se agrego al carrito: " + (this.cantTotalGeneral + this.cantTotalPreferencial) + " tickets ; por un precio total de: " + (this.priceTotalGeneral + this.priceTotalPreferencial));

      const cantG = this.cantTotalGeneral;
      const pricesG = this.priceTotalGeneral;
      const cantP = this.cantTotalPreferencial;
      const pricesP = this.priceTotalPreferencial;

      this.generalServices.ticketsInfo = {
        cantTotalGeneral: cantG,
        priceTotalGeneral: pricesG,
        cantTotalPreferencial: cantP,
        priceTotalPreferencial: pricesP,
        sala: sala,
        nombre: nombre
      }
    }

  }




}
