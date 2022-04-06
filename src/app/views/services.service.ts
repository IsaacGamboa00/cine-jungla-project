import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GeneralService {

    private url: string = environment.url;
    public ticketsInfo: any;
    public foodInfo: any;

    constructor(private http: HttpClient) { }

    getAcount(id: number, pas: string, type: string): Observable<Array<any>> {
        return this.http.get<Array<any>>(this.url + "cuentas/select/" + id + "/" + pas + "/" + type + "")
    }

    getClients() {
        return this.http.get(this.url + "clientes/list");
    }

    getClientByID(id: any) {
        return this.http.get(this.url + "compras/select-cliente/" + id);
    }


}