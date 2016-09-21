import { Component, Input } from '@angular/core';

import { MDL } from '../../mdlUpdater.component';

@Component({
  selector: 'studycard-component',
  templateUrl: './studycard.component.html',
  styleUrls: ['./studycard.component.css'],
  directives: [
    MDL
  ]
})

export class StudyCardComponent {
  @Input() data: Object;
  @Input() type: string;

  constructor() {
  }

}