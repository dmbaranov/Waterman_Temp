import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { AboutAmpComponent } from '../../components/AboutAmp/aboutamp.component';
import { AboutUniverComponent } from '../../components/AboutUniver/aboutuniver.component';
import { AboutUtcComponent } from '../../components/AboutUtc/aboututc.component';

@Component({
  selector: 'aboutstudy-page',
  templateUrl: './aboutstudy.page.html',
  directives: [AboutAmpComponent, AboutUniverComponent, AboutUtcComponent]
})

export class AboutStudyPage implements OnInit {
  paramId: string;
  paramType: string;
  data: Object;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }
  
  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.paramId = params['id'];
        this.paramType = params['type'];

        switch(this.paramType) {
          case 'un':    
            this.getUnivers();
            break;
          case 'a':
            this.getAmps();
            break;
          case 'ut':
            this.getUtcs();
            break;
          default:
            return;
        }
      });
  }

  getUnivers() {
    this.apiService.getUniverById(this.paramId)
      .subscribe(result => {
        this.data = result[0];
      });
  }

  getUtcs() {
    this.apiService.getUtcById(this.paramId)
      .subscribe(result => {
        this.data = result[0];
      });
  }

  getAmps() {
    this.apiService.getAmpById(this.paramId)
      .subscribe(result => {
        this.data = result[0];
      });
  }
}