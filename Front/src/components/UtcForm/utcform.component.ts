import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { MDL } from '../../mdlUpdater.component';

@Component({
  selector: 'utcform-component',
  templateUrl: './utcform.component.html',
  directives: [
    CORE_DIRECTIVES,
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    MDL
  ]
})

export class UtcFormComponent implements OnInit {
  utcForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  @Output() onFormSubmit = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.utcForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.email = this.utcForm.controls['email'];
    this.password = this.utcForm.controls['password'];
  }

  handleSubmit(form: FormGroup, type: string) {
    console.log('Submitting form: ', form);
    console.log('Type: ' + type);
  }

}