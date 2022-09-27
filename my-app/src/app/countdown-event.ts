import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  model = new Date();

  private timeinterval = interval;
  private subscription!: Subscription;

  public dateNow = new Date();
  public dDay: any;
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;

  public timeDifference: any;
  public secondsToDday: any;
  public minutesToDday: any;
  public hoursToDday: any;
  public daysToDday: any;
  title = "Insert title";
  
  public saveData(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  public getData(key: string): any {
    return localStorage.getItem(key)
  }

  private getTimeDifference() {
    this.dDay = this.model.getTime();
    console.log(this.dDay);
    this.saveData("dtime", this.model)
    this.timeDifference = this.dDay - new Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits(timeDifference: any) {
    this.secondsToDday = Math.floor(
      (timeDifference / this.milliSecondsInASecond) % this.SecondsInAMinute
    );
    this.minutesToDday = Math.floor(
      (timeDifference / (this.milliSecondsInASecond * this.minutesInAnHour)) %
        this.SecondsInAMinute
    );
    this.hoursToDday = Math.floor(
      (timeDifference /
        (this.milliSecondsInASecond *
          this.minutesInAnHour *
          this.SecondsInAMinute)) %
        this.hoursInADay
    );
    this.daysToDday = Math.floor(
      timeDifference /
        (this.milliSecondsInASecond *
          this.minutesInAnHour *
          this.SecondsInAMinute *
          this.hoursInADay)
    );
  }
  
  ngOnInit() {
    const value = this.getData("title")
    if (value) {
      this.title = value;
    }
    const date = this.getData("dtime")
    console.log(date)
    if (date) {
      this.model = new Date(date);
    }
     this.startInterval();
  }

  startInterval() {
    
    this.subscription = this.timeinterval(1000).subscribe(x => {
      //console.log('get TD', this.timeDifference);
      this.getTimeDifference();
    });
  }
  
  modelChangeFn(e: any) {
    this.saveData("title", e.target.value);
    this.title = this.getData("title") || "";
  }
}
