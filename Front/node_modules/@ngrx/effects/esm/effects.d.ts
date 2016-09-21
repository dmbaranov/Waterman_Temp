import 'rxjs/add/observable/merge';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
export declare function mergeEffects(...instances: any[]): Observable<any>;
export declare function connectEffectsToStore(store: Store<any>, effects: any[]): () => Promise<boolean>;
