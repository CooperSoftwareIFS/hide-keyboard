(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['hide-keyboard'] = {}),global.core,global.common));
}(this, (function (exports,core,common) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HideKeyboardDirective = (function () {
    function HideKeyboardDirective(el) {
        if (el.nativeElement.attributes.hideKeyboard.value !== 'false') {
            var _this = this;
            this.el = el;
            this.readonly = true;
            this.setReadOnly(this.readonly);
            setTimeout(function () {
                _this.el.nativeElement.focus();
            }, 500);
        };
    }
    /**
     * @return {?}
     */
    HideKeyboardDirective.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        if (this.el.nativeElement.attributes.hideKeyboard.value !== 'false') {
            var _this = this;
            this.readonly = true;
            this.setReadOnly(this.readonly);
            if (!this.readonly) {
                this.setReadOnly(!this.readonly);
            }
            setTimeout(function () {
                _this.readonly = false;
                _this.setReadOnly(_this.readonly);
            }, 100);
        };
    };
    
    /**
     * @param {?} input
     * @return {?}
     */
    HideKeyboardDirective.prototype.onClick = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (this.el.nativeElement.attributes.hideKeyboard.value !== 'false') {
            var _this = this;
            this.readonly = true;
            this.setReadOnly(this.readonly);
            setTimeout(function () {
                _this.readonly = false;
                _this.setReadOnly(_this.readonly);
                _this.el.nativeElement.focus();
            }, 500);
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    HideKeyboardDirective.prototype.setReadOnly = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.el.nativeElement.readOnly = value;
        if (this.el.nativeElement.children && this.el.nativeElement.children.length > 0) {
            this.el.nativeElement.children[0].readOnly = value;
            if (this.el.nativeElement.children[1] != undefined) {
                this.el.nativeElement.children[1].readOnly = value;
            }
        }
        
    };
    
    HideKeyboardDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[hideKeyboard],[hidekeyboard]'
                },] },
    ];
    /** @nocollapse */
    HideKeyboardDirective.ctorParameters = function () { return [
        { type: core.ElementRef, },
    ]; };
    HideKeyboardDirective.propDecorators = {
        "onFocus": [{ type: core.HostListener, args: ['focus',] },],
        "onClick": [{ type: core.HostListener, args: ['click', ['$event.target'],] },],
    };
    return HideKeyboardDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HideKeyboardModule = (function () {
    function HideKeyboardModule() {
    }
    /**
     * @return {?}
     */
    HideKeyboardModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: HideKeyboardModule,
            providers: []
        };
    };
    HideKeyboardModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        HideKeyboardDirective
                    ],
                    exports: [
                        HideKeyboardDirective
                    ]
                },] },
    ];
    /** @nocollapse */
    HideKeyboardModule.ctorParameters = function () { return []; };
    return HideKeyboardModule;
}());

exports.HideKeyboardModule = HideKeyboardModule;
exports.HideKeyboardDirective = HideKeyboardDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));
