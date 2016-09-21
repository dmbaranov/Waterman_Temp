import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { TAB_DIRECTIVES } from 'ng2-bootstrap';

import { MDL } from '../../mdlUpdater.component';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  directives: [
    CORE_DIRECTIVES,
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    TAB_DIRECTIVES,
    MDL
  ]
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login: AbstractControl;
  password: AbstractControl;
  @Output() onFormSubmit = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'login': ['', Validators.required],
      'password': ['', Validators.required]
    });
    
    this.login = this.loginForm.controls['login'];
    this.password = this.loginForm.controls['password'];
  }

  handleSubmit(form: FormGroup) {
    if (form.valid) {
      this.onFormSubmit.emit({
        login: form.controls['login'].value,
        password: form.controls['password'].value
      });
    }
  }
}