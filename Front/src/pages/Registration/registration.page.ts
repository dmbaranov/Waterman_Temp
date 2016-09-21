import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AmpFormComponent } from '../../components/AmpForm/ampform.component';
import { UniverFormComponent } from '../../components/UniverForm/univerform.component';
import { UtcFormComponent } from '../../components/UtcForm/utcform.component';

@Component({
  selector: 'registration-page',
  templateUrl: './registration.page.html',
  directives: [AmpFormComponent, UniverFormComponent, UtcFormComponent]
})

export class RegistrationPage implements OnInit {

  urlParam: string;

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.params
      .map(params => params['type'])
      .subscribe(urlParam => {
        this.urlParam = urlParam
      });
  }
}