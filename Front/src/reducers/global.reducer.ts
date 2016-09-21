import { Action } from '@ngrx/store';

import { GlobalActions } from '../actions/global.actions';

export interface IGlobalState {
  isLoading: boolean;
  token: string;
};

const initialState: IGlobalState = {
  isLoading: false,
  token: ''
};

export const globalState = (state = initialState, action: Action): IGlobalState => {
  switch(action.type) {
    case GlobalActions.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        token: action.payload.token
      });
    default:
      return state;
  }
}