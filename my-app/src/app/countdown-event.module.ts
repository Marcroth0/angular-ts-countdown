import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2FittextModule } from "ng2-fittext";

import { NgbdDatepickerPopup } from './countdown-event';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule, Ng2FittextModule],
  declarations: [NgbdDatepickerPopup],
  exports: [NgbdDatepickerPopup],
  bootstrap: [NgbdDatepickerPopup]
})
export class NgbdDatepickerPopupModule {}
