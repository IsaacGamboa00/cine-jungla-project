import { Validators } from "@angular/forms"

export interface Acount {
    password: string;
    tipo_id_empleado: string;
    numero_id_empleado: number;

}

export interface Client {
    tipo_id_empleado: string;
    numero_id_empleado: number;

}

export class ModelAcount {
    constructor() { }

    public model: Acount = {
        password: '',
        tipo_id_empleado: '',
        numero_id_empleado: 0
    }

    public modelClient: Client = {
        tipo_id_empleado: '',
        numero_id_empleado: 0
    }

    public modelAcountValidators = {

        password: [
            Validators.required
        ],
        tipo_id_empleado: [
            Validators.required
        ],
        numero_id_empleado: [
            Validators.required
        ],
    }
}
