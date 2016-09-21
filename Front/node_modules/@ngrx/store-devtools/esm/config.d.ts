import { ActionReducer } from '@ngrx/store';
export interface Options {
    maxAge?: number;
    monitor?: ActionReducer<any>;
}
export declare const OPTIONS: String;
