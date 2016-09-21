import { StateUpdates } from './state-updates';
import { Store } from "@ngrx/store";
export declare const BOOTSTRAP_EFFECTS: String;
export declare function runEffects(...effects: any[]): any[];
export declare const CONNECT_EFFECTS_PROVIDER: {
    provide: any;
    multi: boolean;
    deps: (typeof Store | String)[];
    useFactory: (store: Store<any>, effects: any[]) => () => Promise<boolean>;
};
export declare const STATE_UPDATES_PROVIDER: {
    provide: typeof StateUpdates;
    useClass: typeof StateUpdates;
};
