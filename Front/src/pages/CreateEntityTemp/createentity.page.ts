import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { ApiService } from '../../services/api.service';

import { MDL } from '../../mdlUpdater.component';

@Component({
  selector: 'createentity-page',
  templateUrl: './createentity.page.html',
  styleUrls: ['./createentity.page.css'],
  directives: [
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    MDL
  ]
})

export class CreateEntity implements OnInit {

  formUniver: FormGroup;
  unTitle: AbstractControl;
  unAddress: AbstractControl;
  unEmail: AbstractControl;
  unPhone: AbstractControl;
  unSite: AbstractControl;
  unDescription: AbstractControl;
  unId: AbstractControl;

  formUtc: FormGroup;
  utTitle: AbstractControl;
  utAddress: AbstractControl;
  utEmail: AbstractControl;
  utPhone: AbstractControl;
  utSite: AbstractControl;
  utDescription: AbstractControl;
  utId: AbstractControl;

  formAmp: FormGroup;
  ampTitle: AbstractControl;
  ampAddress: AbstractControl;
  ampEmail: AbstractControl;
  ampPhone: AbstractControl;
  ampSite: AbstractControl;
  ampDescription: AbstractControl;
  ampId: AbstractControl;


  constructor(private fb: FormBuilder,
              private apiService: ApiService) { }

  ngOnInit() {
    this.formUniver = this.fb.group({
      'title': [''],
      'address': [''],
      'phone': [''],
      'site': [''],
      'email': [''],
      'description': [''],
      'id': ['']
    })
    
    this.formUtc = this.fb.group({
      'title': [''],
      'address': [''],
      'phone': [''],
      'site': [''],
      'email': [''],
      'description': [''],
      'id': ['']
    })

    this.formAmp = this.fb.group({
      'title': [''],
      'address': [''],
      'phone': [''],
      'site': [''],
      'email': [''],
      'description': [''],
      'id': ['']
    })
  }

  handleSubmit(form: any, type: string) {
    if (type === "un") {
      this.apiService.addUniver({
        'universities': {
          'name': this.formUniver.controls['title'].value,
          'address': this.formUniver.controls['address'].value,
          'phone': this.formUniver.controls['phone'].value,
          'site': this.formUniver.controls['site'].value,
          'text': this.formUniver.controls['description'].value,
          'user_id': this.formUniver.controls['id'].value
        }
      })
      .subscribe(response => {
        console.log(response)
      });
    }
  }
}