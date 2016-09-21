import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { MDL } from '../../mdlUpdater.component';

@Component({
  selector: 'univerform-component',
  templateUrl: './univerform.component.html',
  directives: [
    CORE_DIRECTIVES,
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    MDL
  ]
})

export class UniverFormComponent implements OnInit {
  univerForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  @Output() onFormSubmit = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.univerForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.email = this.univerForm.controls['email'];
    this.password = this.univerForm.controls['password'];
  }

  handleSubmit(form: FormGroup, type: string) {
    console.log('Submitting form: ', form);
    console.log('Type: ' + type);
  }

}