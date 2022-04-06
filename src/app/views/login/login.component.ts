import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModelAcount } from '../../models/acount';
import { LoginService } from './login.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ModelAcount]
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.formBuilder.group(this.modelAcount.model);
  constructor(
    private formBuilder: FormBuilder,
    private modelAcount: ModelAcount,
    private servie: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const id = Number(this.form.value.numero_id_empleado);
    const pass = this.form.value.password;
    const type = this.form.value.tipo_id_empleado;
    this.servie.getAcount(id, pass, type).subscribe(
      (success: any) => {
        console.log('entro', success);
        if (success.data.length > 0) {
          this.saveLocalStorage(id, pass, type);
          this.navigate();

        } else {
          alert('El usuario no existe');

        }
      },
      (error) => {
        alert('Ocurrio un error');
      }
    )
  }

  saveLocalStorage(id: number, pass: string, type: string) {
    localStorage.clear();
    localStorage.setItem('id', id.toString());
    localStorage.setItem('type', type.toString());
    localStorage.setItem('pass', pass);
  }

  navigate() {
    this.router.navigateByUrl('/services');
  }
}
