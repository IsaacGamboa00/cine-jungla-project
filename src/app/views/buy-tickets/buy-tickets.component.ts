import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.services';

@Component({
  selector: 'app-buy-tickets',
  templateUrl: './buy-tickets.component.html',
  styleUrls: ['./buy-tickets.component.scss']
})
export class BuyTicketsComponent implements OnInit {


  public movies: any = [];
  public multiplexes: any = [];

  constructor(private moviesService: MoviesService) { }

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



}
