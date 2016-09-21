import { Component, Input } from '@angular/core';

import { MDL } from '../../mdlUpdater.component';

@Component({
  selector: 'aboutuniver-component',
  templateUrl: './aboutuniver.component.html',
  directives: [
    MDL
  ]
})

export class AboutUniverComponent {
  @Input() data: Object;

  constructor() {
  }

}