/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Action, Selector, State } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { GetFeatures, UpdateFeatures } from '../actions/feature-management.actions';
import { FeatureManagementService } from '../services/feature-management.service';
var FeatureManagementState = /** @class */ (function () {
    function FeatureManagementState(featureManagementService) {
        this.featureManagementService = featureManagementService;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    FeatureManagementState.getFeatures = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var features = _a.features;
        return features;
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    FeatureManagementState.prototype.getFeatures = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var patchState = _a.patchState;
        var payload = _b.payload;
        return this.featureManagementService.getFeatures(payload).pipe(tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var features = _a.features;
            return patchState({
                features: features,
            });
        })));
    };
    /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    FeatureManagementState.prototype.updateFeatures = /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    function (_, _a) {
        var payload = _a.payload;
        return this.featureManagementService.updateFeatures(payload);
    };
    FeatureManagementState.ctorParameters = function () { return [
        { type: FeatureManagementService }
    ]; };
    tslib_1.__decorate([
        Action(GetFeatures),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, GetFeatures]),
        tslib_1.__metadata("design:returntype", void 0)
    ], FeatureManagementState.prototype, "getFeatures", null);
    tslib_1.__decorate([
        Action(UpdateFeatures),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, UpdateFeatures]),
        tslib_1.__metadata("design:returntype", void 0)
    ], FeatureManagementState.prototype, "updateFeatures", null);
    tslib_1.__decorate([
        Selector(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], FeatureManagementState, "getFeatures", null);
    FeatureManagementState = tslib_1.__decorate([
        State({
            name: 'FeatureManagementState',
            defaults: (/** @type {?} */ ({ features: {} })),
        }),
        tslib_1.__metadata("design:paramtypes", [FeatureManagementService])
    ], FeatureManagementState);
    return FeatureManagementState;
}());
export { FeatureManagementState };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FeatureManagementState.prototype.featureManagementService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tYW5hZ2VtZW50LnN0YXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5mZWF0dXJlLW1hbmFnZW1lbnQvIiwic291cmNlcyI6WyJsaWIvc3RhdGVzL2ZlYXR1cmUtbWFuYWdlbWVudC5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBZ0IsTUFBTSxhQUFhLENBQUM7QUFDcEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFcEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7O0lBWWhGLGdDQUFvQix3QkFBa0Q7UUFBbEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtJQUFHLENBQUM7Ozs7O0lBSm5FLGtDQUFXOzs7O0lBQWxCLFVBQW1CLEVBQXFDO1lBQW5DLHNCQUFRO1FBQzNCLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQUtELDRDQUFXOzs7OztJQUFYLFVBQVksRUFBcUQsRUFBRSxFQUF3QjtZQUE3RSwwQkFBVTtZQUE2QyxvQkFBTztRQUMxRSxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM1RCxHQUFHOzs7O1FBQUMsVUFBQyxFQUFZO2dCQUFWLHNCQUFRO1lBQ2IsT0FBQSxVQUFVLENBQUM7Z0JBQ1QsUUFBUSxVQUFBO2FBQ1QsQ0FBQztRQUZGLENBRUUsRUFDSCxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFHRCwrQ0FBYzs7Ozs7SUFBZCxVQUFlLENBQUMsRUFBRSxFQUEyQjtZQUF6QixvQkFBTztRQUN6QixPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Z0JBaEI2Qyx3QkFBd0I7O0lBR3RFO1FBREMsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7eURBQzRELFdBQVc7OzZEQVExRjtJQUdEO1FBREMsTUFBTSxDQUFDLGNBQWMsQ0FBQzs7eURBQ1EsY0FBYzs7Z0VBRTVDO0lBcEJEO1FBREMsUUFBUSxFQUFFOzs7O21EQUdWO0lBSlUsc0JBQXNCO1FBSmxDLEtBQUssQ0FBMEI7WUFDOUIsSUFBSSxFQUFFLHdCQUF3QjtZQUM5QixRQUFRLEVBQUUsbUJBQUEsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQTJCO1NBQ3RELENBQUM7aURBTzhDLHdCQUF3QjtPQU4zRCxzQkFBc0IsQ0F1QmxDO0lBQUQsNkJBQUM7Q0FBQSxJQUFBO1NBdkJZLHNCQUFzQjs7Ozs7O0lBTXJCLDBEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiwgU2VsZWN0b3IsIFN0YXRlLCBTdGF0ZUNvbnRleHQgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgR2V0RmVhdHVyZXMsIFVwZGF0ZUZlYXR1cmVzIH0gZnJvbSAnLi4vYWN0aW9ucy9mZWF0dXJlLW1hbmFnZW1lbnQuYWN0aW9ucyc7XHJcbmltcG9ydCB7IEZlYXR1cmVNYW5hZ2VtZW50IH0gZnJvbSAnLi4vbW9kZWxzL2ZlYXR1cmUtbWFuYWdlbWVudCc7XHJcbmltcG9ydCB7IEZlYXR1cmVNYW5hZ2VtZW50U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZlYXR1cmUtbWFuYWdlbWVudC5zZXJ2aWNlJztcclxuXHJcbkBTdGF0ZTxGZWF0dXJlTWFuYWdlbWVudC5TdGF0ZT4oe1xyXG4gIG5hbWU6ICdGZWF0dXJlTWFuYWdlbWVudFN0YXRlJyxcclxuICBkZWZhdWx0czogeyBmZWF0dXJlczoge30gfSBhcyBGZWF0dXJlTWFuYWdlbWVudC5TdGF0ZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZlYXR1cmVNYW5hZ2VtZW50U3RhdGUge1xyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldEZlYXR1cmVzKHsgZmVhdHVyZXMgfTogRmVhdHVyZU1hbmFnZW1lbnQuU3RhdGUpIHtcclxuICAgIHJldHVybiBmZWF0dXJlcztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmVhdHVyZU1hbmFnZW1lbnRTZXJ2aWNlOiBGZWF0dXJlTWFuYWdlbWVudFNlcnZpY2UpIHt9XHJcblxyXG4gIEBBY3Rpb24oR2V0RmVhdHVyZXMpXHJcbiAgZ2V0RmVhdHVyZXMoeyBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxGZWF0dXJlTWFuYWdlbWVudC5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBHZXRGZWF0dXJlcykge1xyXG4gICAgcmV0dXJuIHRoaXMuZmVhdHVyZU1hbmFnZW1lbnRTZXJ2aWNlLmdldEZlYXR1cmVzKHBheWxvYWQpLnBpcGUoXHJcbiAgICAgIHRhcCgoeyBmZWF0dXJlcyB9KSA9PlxyXG4gICAgICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICAgICAgZmVhdHVyZXMsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihVcGRhdGVGZWF0dXJlcylcclxuICB1cGRhdGVGZWF0dXJlcyhfLCB7IHBheWxvYWQgfTogVXBkYXRlRmVhdHVyZXMpIHtcclxuICAgIHJldHVybiB0aGlzLmZlYXR1cmVNYW5hZ2VtZW50U2VydmljZS51cGRhdGVGZWF0dXJlcyhwYXlsb2FkKTtcclxuICB9XHJcbn1cclxuIl19