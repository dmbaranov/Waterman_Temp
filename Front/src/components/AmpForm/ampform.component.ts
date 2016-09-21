import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { MDL } from '../../mdlUpdater.component';

@Component({
  selector: 'ampform-component',
  templateUrl: './ampform.component.html',
  directives: [
    CORE_DIRECTIVES,
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    MDL
  ]
})

export class AmpFormComponent implements OnInit {
  ampForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  @Output() onFormSubmit = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.ampForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.email = this.ampForm.controls['email'];
    this.password = this.ampForm.controls['password'];
  }

  handleSubmit(form: FormGroup, type: string) {
    console.log('Submitting form: ', form);
    console.log('Type: ' + type);
  }

}