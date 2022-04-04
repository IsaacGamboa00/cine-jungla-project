import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    private url: string = environment.url;
    constructor(private http: HttpClient) { }

    getAllMovies(idMultiplex: number) {
        return this.http.get<Array<any>>(this.url + 'peliculas/select-multiplex/' + idMultiplex)
    }
    getAllMultiplex() {
        return this.http.get<Array<any>>(this.url + 'multiplex/list')
    }




}