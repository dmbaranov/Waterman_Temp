import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { StudyCardComponent } from '../../components/StudyCard/studycard.component';
import { MDL } from '../../mdlUpdater.component';

@Component({
  selector: 'study-page',
  directives: [StudyCardComponent, MDL],
  templateUrl: './study.page.html',
  styles: [
    `
      .mdl-tabs__tab {
        width: 100%;
      }
    `
  ]
})

export class StudyPage implements OnInit {

  univers: Array<any>;
  amps: Array<any>;
  utcs: Array<any>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUnivers()
      .subscribe(univers => {
        this.univers = univers.universities
      });

    this.apiService.getAmps()
      .subscribe(amps => {
        this.amps = amps.ports;
      });

    this.apiService.getUtcs()
      .subscribe(utcs => {
        this.utcs = utcs.education_centers
      });
  }
}