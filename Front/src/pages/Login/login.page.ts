import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { MDL } from '../../mdlUpdater.component';
import { LoginComponent } from '../../components/Login/login.component';
import { AppState } from '../../reducers';
import { GlobalActions } from '../../actions/global.actions';
import { ApiService } from '../../services/api.service';
import { getToken } from '../../selectors/global.selector';

@Component({
  selector: 'login-page',
  templateUrl: './login.page.html',
  directives: [LoginComponent, MDL]
})

export class LoginPage implements OnInit {
  token: string;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private globalActions: GlobalActions,
    private apiService: ApiService
  ) { }
        
  ngOnInit() {
    this.store.let(getToken()).subscribe((token: string) => {
      if (token.length > 0) {
        localStorage.setItem('token', token);
      }
    });
  }
  
  onFormSubmit(loginData: any) {
    this.store.dispatch(this.globalActions.tryLogin(loginData));
  }
}