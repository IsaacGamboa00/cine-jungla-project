import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BuyService {

    private url: string = environment.url;

    constructor(private http: HttpClient) { }

    addBuy(data: any) {
        return this.http.post(this.url + "compras/insert", data);
    }


}