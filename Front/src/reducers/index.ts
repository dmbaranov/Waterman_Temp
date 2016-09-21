import '@ngrx/core/add/operator/select';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

import { globalState, IGlobalState } from './global.reducer';

export interface AppState {
  global: IGlobalState,
}

export default compose(combineReducers)({
  global: globalState
});