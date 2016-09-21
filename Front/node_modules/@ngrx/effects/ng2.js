"use strict";
var core_1 = require('@angular/core');
var util_1 = require('./util');
var effects_1 = require('./effects');
var state_updates_1 = require('./state-updates');
var store_1 = require("@ngrx/store");
exports.BOOTSTRAP_EFFECTS = new String('@ngrx/effects Bootstrap Effects');
function runEffects() {
    var effects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        effects[_i - 0] = arguments[_i];
    }
    var individuals = util_1.flatten(effects);
    var allEffects = individuals.map(function (effectClass) { return createDynamicProvider(effectClass); });
    return individuals.concat(allEffects, [
        exports.CONNECT_EFFECTS_PROVIDER,
        exports.STATE_UPDATES_PROVIDER
    ]);
}
exports.runEffects = runEffects;
exports.CONNECT_EFFECTS_PROVIDER = {
    provide: core_1.APP_INITIALIZER,
    multi: true,
    deps: [store_1.Store, exports.BOOTSTRAP_EFFECTS],
    useFactory: effects_1.connectEffectsToStore
};
exports.STATE_UPDATES_PROVIDER = {
    provide: state_updates_1.StateUpdates,
    useClass: state_updates_1.StateUpdates
};
function createDynamicProvider(effectClass) {
    return {
        provide: exports.BOOTSTRAP_EFFECTS,
        useExisting: effectClass,
        multi: true
    };
}
