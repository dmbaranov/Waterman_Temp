import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Store } from '@ngrx/store';
import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';

import { AppState } from './reducers';
import { GlobalActions } from './actions/global.actions';
import { getToken } from './selectors/global.selector';

@Component({
  selector: 'app',
  template: `
    <div class="mdl-layout mdl-js-layout mdl-layout--no-desktop-drawer-button">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row fixed-width">
          <span class="mdl-layout__title">Create Yourself</span>
          <div class="mdl-layout-spacer"></div>
          <nav class="mdl-navigation">
            <a class="mdl-navigation__link" href [routerLink]="['']">Main</a>
            <a class="mdl-navigation__link" href [routerLink]="['/login']">Login</a>
            <a id="registrationButton" class="mdl-navigation__link dropdown-link">Registration</a>
            <a *ngIf="token.length > 0" class="mdl-navigation__link" href [routerLink]="['/form']">Form</a>
          </nav>
        </div>

        <ul class="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
            for="registrationButton">
          <li class="mdl-menu__item"><a href [routerLink]="['/registration', 'university']">ВУЗ</a></li>
          <li class="mdl-menu__item"><a href [routerLink]="['/registration/amp']">АМП</a></li>
          <li class="mdl-menu__item"><a href [routerLink]="['/registration/utc']">УТЦ</a></li>
        </ul>

      </header>
      <div class="mdl-layout__drawer">
        <span class="mdl-layout__title">Material Design Lite</span>
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link" href [routerLink]="['']">Main</a>
          <a class="mdl-navigation__link" href [routerLink]="['login']">Login</a>
        </nav>
      </div>
      <main class="mdl-layout__content fixed-width">
        <router-outlet></router-outlet>
      </main>
      <!--<ngrx-store-log-monitor toggleCommand="ctrl-h" positionCommand="ctrl-m"></ngrx-store-log-monitor>-->
    </div>
  `,
  directives: [ROUTER_DIRECTIVES, StoreLogMonitorComponent],
  styleUrls: ['../node_modules/material-design-lite/dist/material.min.css', './tmp.css'],
  encapsulation: ViewEncapsulation.None
})

export class App implements OnInit {
  token: string;

  constructor(
    private store: Store<AppState>,
    private globalActions: GlobalActions
  ) {
    if (localStorage.getItem('token') !== null) {
      this.store.dispatch(this.globalActions.loginSuccessful(localStorage.getItem('token')));
    }
  }
  
  ngOnInit() {
    this.store.let(getToken()).subscribe(token => {
      this.token = token;
    });
  }
}