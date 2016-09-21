import { Observable } from 'rxjs/Observable';

import { AppState } from '../reducers';

export function getToken() {
  return (state$: Observable<AppState>) => state$
    .select(s => s.global.token);
}