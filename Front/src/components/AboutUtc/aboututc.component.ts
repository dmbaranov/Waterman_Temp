import { Component, Input } from '@angular/core';

import { MDL } from '../../mdlUpdater.component';

@Component({
  selector: 'aboututc-component',
  templateUrl: './aboututc.component.html',
  directives: [
    MDL
  ]
})

export class AboutUtcComponent {
  @Input() data: Object;

  constructor() {
  }

}