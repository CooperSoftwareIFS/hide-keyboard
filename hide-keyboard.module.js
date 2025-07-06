import { Directive, ElementRef, HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HideKeyboardDirective = (function () {
    function HideKeyboardDirective(el) {
        if (el.nativeElement.attributes.hideKeyboard.value !== 'false')
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
        { type: Directive, args: [{
                    selector: '[hideKeyboard]'
                },] },
    ];
    /** @nocollapse */
    HideKeyboardDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    HideKeyboardDirective.propDecorators = {
        "onFocus": [{ type: HostListener, args: ['focus',] },],
        "onClick": [{ type: HostListener, args: ['click', ['$event.target'],] },],
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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

export { HideKeyboardModule, HideKeyboardDirective };
