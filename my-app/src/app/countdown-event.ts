import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import {
  NgbDateAdapter,
  NgbDateNativeAdapter
} from '@ng-bootstrap/ng-bootstrap';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'ngbd-datepicker-popup',
  templateUrl: './countdown-event.html',
  styleUrls: ['./countdown-event.css'],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]
})
export class NgbdDatepickerPopup { 

}
