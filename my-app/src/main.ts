import './polyfills';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {NgbdDatepickerPopupModule} from './app/countdown-event.module';

platformBrowserDynamic()
    .bootstrapModule(NgbdDatepickerPopupModule)
    .then(ref => {

    })
    .catch(err => console.error(err));
