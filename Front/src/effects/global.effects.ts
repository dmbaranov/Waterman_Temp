import { Injectable } from '@angular/core';
import { Effect, StateUpdates, toPayload } from '@ngrx/effects'
import { Observable } from 'rxjs/Observable';

import { AppState } from '../reducers';
import { ApiService } from '../services/api.service';
import { GlobalActions } from '../actions/global.actions';

@Injectable()
export class GlobalEffects {
  constructor(
    private updates$: StateUpdates<AppState>,
    private apiService$: ApiService,
    private globalActions: GlobalActions
  ) { }
}