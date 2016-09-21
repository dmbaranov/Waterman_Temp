import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class GlobalActions {
  static TRY_LOGIN = '[Login] Try Login';
  tryLogin(authData: any): Action {
    return {
      type: GlobalActions.TRY_LOGIN,
      payload: {
        data: authData
      }
    }
  }

  static LOGIN_SUCCESS = '[Login] Login Successful';
  loginSuccessful(token: string): Action {
    return {
      type: GlobalActions.LOGIN_SUCCESS,
      payload: {
        token: token
      }
    }
  }

  static LOGIN_FAILED = '[Login] Login Failed';
  loginFailed(): Action {
    return {
      type: GlobalActions.LOGIN_FAILED
    }
  }
}