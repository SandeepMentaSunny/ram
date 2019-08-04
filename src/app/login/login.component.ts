import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AppLitteralsConfig } from './../../providers/litterals/app.litterals';
import { AppRegExpressionsConfig } from './../../providers/litterals/appregularexpressions';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(public builder: FormBuilder, public router: Router) { 
    this.loginForm = builder.group({
      email: [null, Validators.compose([Validators.required, Validators.pattern(AppRegExpressionsConfig.email)])],
      password: [null, Validators.required]
    })
  }

  ngOnInit() {
  }

  logIn(){
    this.router.navigate(['/dashboard']).then(res => console.log(res)).catch(err => console.error(err));
  }
}
