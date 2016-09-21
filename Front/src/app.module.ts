import { NgModule, enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { RouterModule } from '@angular/router';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { instrumentStore } from '@ngrx/store-devtools';
import { useLogMonitor } from '@ngrx/store-log-monitor';
import { runEffects } from '@ngrx/effects';

import { App } from './app.component';
import { ApiService } from './services/api.service';
import pages from './pages';
import effects from './effects';
import routes from './routes';
import reducer from './reducers';
import actions from './actions';
import guards from './guards';

if (process.env.ENV === 'production') {
  enableProdMode();
}


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    App,
    pages
  ],
  providers: [
    HTTP_PROVIDERS,
    disableDeprecatedForms(),
    provideForms(),
    provideStore(reducer),
    runEffects(effects),
    ApiService,
    actions,
    guards,
    instrumentStore({
      monitor: useLogMonitor({
          visible: true,
          position: 'right'
      })
    }),
  ],
  bootstrap: [App]
})

export class AppModule {

}