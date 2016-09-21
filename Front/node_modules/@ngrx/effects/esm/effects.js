import 'rxjs/add/observable/merge';
import { Observable } from 'rxjs/Observable';
import { getEffectKeys } from './metadata';
import { flatten } from './util';
export function mergeEffects(...instances) {
    const observables = flatten(instances).map((i) => getEffectKeys(i).map((key) => {
        if (typeof i[key] === 'function') {
            return i[key]();
        }
        return i[key];
    }));
    return Observable.merge(...flatten(observables));
}
export function connectEffectsToStore(store, effects) {
    return function () {
        mergeEffects(...effects).subscribe(store);
        return Promise.resolve(true);
    };
}
