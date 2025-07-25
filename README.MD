# hide-keyboard

Cloned from https://www.npmjs.com/package/hide-keyboard/v/0.2.1 with additions to support angular attribute binding.

This library is used to keep the keyboard hidden in an Ionic application when the focus is on a input.

## Installation

To install this library, run:

```bash
$ npm install git+https://github.com/CooperSoftwareIFS/hide-keyboard.git --save
```

## Use library into Ionic Project

Once you have installed, you can import library in any Ionic application by doing:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import library
import { HideKeyboardModule } from 'hide-keyboard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify library as an import
    HideKeyboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its directives in your Ionic application:

```xml
<!-- You can now use your library component in app.component.html -->
<ion-input hideKeyboard [attr.hideKeyboard]="!hideKeyboard ? false : true" placeholder="Barcode" name="barcodeField" id="barcodeField" type="text"></ion-input>
<ion-input hideKeyboard="{{hideKeyboard}}" placeholder="Barcode" name="barcodeField" id="barcodeField" type="text"></ion-input>
```
## License

MIT © [Gregory Heyligen](mailto:cudderheyl@gmail.com)
