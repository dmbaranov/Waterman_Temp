import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../reducers';
import { getToken } from '../selectors/global.selector';

@Injectable()
export class HasTokenGuard implements CanActivate {
  token: string;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
    this.store.let(getToken()).subscribe((token: string) => {
      this.token = token;
    });
  }

  canActivate() {
    if (this.token !== '') {
      return true;
    }
    return false;
  }
}