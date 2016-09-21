import 'rxjs/add/operator/map';
import { StoreDevtools } from '@ngrx/store-devtools';
export declare class LogMonitorComponent {
    private devtools;
    expandEntries: boolean;
    private items$;
    private canRevert$;
    private canSweep$;
    private canCommit$;
    constructor(devtools: StoreDevtools);
    handleToggle(id: number): void;
    handleReset(): void;
    handleRollback(): void;
    handleSweep(): void;
    handleCommit(): void;
}
