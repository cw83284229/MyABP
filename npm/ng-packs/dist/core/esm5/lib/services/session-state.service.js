/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { SessionState } from '../states';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
var SessionStateService = /** @class */ (function () {
    function SessionStateService(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    SessionStateService.prototype.getLanguage = /**
     * @return {?}
     */
    function () {
        return this.store.selectSnapshot(SessionState.getLanguage);
    };
    /**
     * @return {?}
     */
    SessionStateService.prototype.getTenant = /**
     * @return {?}
     */
    function () {
        return this.store.selectSnapshot(SessionState.getTenant);
    };
    SessionStateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SessionStateService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ SessionStateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SessionStateService_Factory() { return new SessionStateService(i0.ɵɵinject(i1.Store)); }, token: SessionStateService, providedIn: "root" });
    return SessionStateService;
}());
export { SessionStateService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SessionStateService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3Nlc3Npb24tc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxXQUFXLENBQUM7OztBQUV6QztJQUlFLDZCQUFvQixLQUFZO1FBQVosVUFBSyxHQUFMLEtBQUssQ0FBTztJQUFHLENBQUM7Ozs7SUFFcEMseUNBQVc7OztJQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7OztJQUVELHVDQUFTOzs7SUFBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUM7O2dCQVpGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTFEsS0FBSzs7OzhCQURkO0NBaUJDLEFBYkQsSUFhQztTQVZZLG1CQUFtQjs7Ozs7O0lBQ2xCLG9DQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IFNlc3Npb25TdGF0ZSB9IGZyb20gJy4uL3N0YXRlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2Vzc2lvblN0YXRlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmUpIHt9XHJcblxyXG4gIGdldExhbmd1YWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoU2Vzc2lvblN0YXRlLmdldExhbmd1YWdlKTtcclxuICB9XHJcblxyXG4gIGdldFRlbmFudCgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFNlc3Npb25TdGF0ZS5nZXRUZW5hbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=