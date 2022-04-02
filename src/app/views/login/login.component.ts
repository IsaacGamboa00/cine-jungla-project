import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModelAcount } from '../../models/acount';

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
    private modelAcount: ModelAcount
  ) { }

  ngOnInit(): void {

  }

}
