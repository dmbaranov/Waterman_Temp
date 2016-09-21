import { Component, Input } from '@angular/core';

import { MDL } from '../../mdlUpdater.component';

@Component({
  selector: 'aboutamp-component',
  templateUrl: './aboutamp.component.html',
  styleUrls: ['./aboutamp.component.css'],
  directives: [
    MDL
  ]
})

export class AboutAmpComponent {
  @Input() data: Object;

  constructor() {
  }

}