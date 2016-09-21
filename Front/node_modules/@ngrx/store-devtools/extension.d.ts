import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/share';
import { Observable } from 'rxjs/Observable';
import { LiftedState } from './reducer';
export declare const ExtensionActionTypes: {
    START: string;
    DISPATCH: string;
    STOP: string;
    ACTION: string;
};
export declare const REDUX_DEVTOOLS_EXTENSION: String;
export interface ReduxDevtoolsExtensionConnection {
    subscribe(listener: (change: any) => void): any;
    unsubscribe(): any;
    send(action: any, state: any): any;
}
export interface ReduxDevtoolsExtension {
    connect(options: {
        shouldStringify?: boolean;
        instanceId: string;
    }): ReduxDevtoolsExtensionConnection;
    send(action: any, state: any, shouldStringify?: boolean, instanceId?: string): any;
}
export declare class Extension {
    private devtoolsExtension;
    private instanceId;
    liftedActions$: Observable<any>;
    actions$: Observable<any>;
    constructor(devtoolsExtension: ReduxDevtoolsExtension);
    notify(action: any, state: LiftedState): void;
    private createChangesObservable();
    private createActionStreams();
}
