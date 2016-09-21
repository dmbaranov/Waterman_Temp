import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { MDL } from '../../mdlUpdater.component';

@Component({
  selector: 'form-page',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.css'],
  directives: [
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    MDL
  ]
})

export class FormPage implements OnInit {

  form: FormGroup;
  title: AbstractControl;
  address: AbstractControl;
  phone: AbstractControl;
  site: AbstractControl;
  email: AbstractControl;
  description: AbstractControl;
  security_fiveYearsDays: AbstractControl;
  security_fiveYearsPrice: AbstractControl
  security_firstTimeDays: AbstractControl;
  security_firstTimePrice: AbstractControl;
  security_individualDays: AbstractControl;
  security_individualPrice: AbstractControl

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      'title': [''],
      'address': [''],
      'phone': [''],
      'site': [''],
      'email': [''],
      'description': [''],
      'security_fiveYearsPrice':[''],
      'security_fiveYearsDays': [''],
      'security_firstTimeDays': [''],
      'security_firstTimePrice': [''],
      'security_individualDays': [''],
      'security_individualPrice':['']
    })
    
    this.title = this.form.controls['title']
    this.address = this.form.controls['address']
    this.phone = this.form.controls['phone']
    this.site = this.form.controls['site']
    this.email = this.form.controls['email']
    this.description = this.form.controls['description']
    this.security_fiveYearsPrice = this.form.controls['security_fiveYearsPrice']
    this.security_fiveYearsDays = this.form.controls['security_fiveYearsDays']
    this.security_firstTimeDays = this.form.controls['security_firstTimeDays']
    this.security_firstTimePrice = this.form.controls['security_firstTimePrice']
    this.security_individualDays = this.form.controls['security_individualDay']
    this.security_individualPrice = this.form.controls['security_individualPrice']
  }

  handleSubmit(form: any) {
    console.log(form)
  }
}