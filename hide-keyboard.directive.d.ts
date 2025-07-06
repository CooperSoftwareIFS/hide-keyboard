import { ElementRef } from '@angular/core';
export declare class HideKeyboardDirective {
    private el;
    private readonly;
    constructor(el: ElementRef);
    onFocus(): void;
    onClick(input: any): void;
    private setReadOnly(value);
}
